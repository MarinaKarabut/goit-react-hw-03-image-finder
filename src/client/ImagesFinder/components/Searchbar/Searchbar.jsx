import { Component } from 'react';

import styles from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        query: "",

    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({query: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
        this.setState({query: ""})
    
    }

    render() {
        const { handleSubmit, handleChange}=this
        return (
            <header className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={styles.searchFormButton}>
                        <span className={styles.searchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={styles.searchFormInput}
                        type="text"
                        value={this.state.query}
                        onChange={handleChange}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
            
    }
};

export default Searchbar;
