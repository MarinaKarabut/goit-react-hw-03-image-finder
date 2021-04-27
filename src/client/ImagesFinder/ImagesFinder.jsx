import { Component,  createRef} from 'react';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import apiService from '../../services/api-service';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { initialState } from './initialState'
import Modal from './components/Modal';

class ImagesFinder extends Component {
  state = { ...initialState };
  
  listRef = createRef();

  componentDidMount() {
    this.fetchImages();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.hits.length < this.state.hits.length) {
      const { current } = this.listRef;
      return current.scrollHeight
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    if (snapshot !== null) {
      window.scrollTo({
        top: snapshot,
        behavior: 'smooth',
      });
    }      
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, hits: [], error: null });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = {
      searchQuery,
      page,
    };

    this.setState({ loading: true });

    apiService
      .fetchImages(options)
      .then(hits => {
        if (!hits.length) {
          this.setState({
            error: `No matches found for your request - ${searchQuery}!`,
          });
        }
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error =>
        this.setState({ error: `Something went wrong. Try again!` }),
      )
      .finally(() => this.setState({ loading: false }));
  
  };

  toggleModal = (src) => {
    this.setState(({ showModal}) => ({
      showModal: !showModal,
      activeImg: src

    }));
  };
  
  render() {
    const { hits, loading, error, showModal, activeImg } = this.state;

    const { onChangeQuery, fetchImages , listRef, toggleModal} = this;
    return (
      <>
        {showModal && <Modal onClose={toggleModal}>
          <img src={activeImg} alt=""/>
        </Modal>}

        <Searchbar onSubmit={onChangeQuery} />

        {error && <ErrorMessage text={error} />}
        
        <div ref={listRef}>
          <ImageGallery images={hits} onClick={toggleModal}/>
        </div>
        
        {loading && <Loader />}

        {hits.length > 0 && !loading && <Button onClick={fetchImages} />}
      </>
    );
  }
}

export default ImagesFinder;