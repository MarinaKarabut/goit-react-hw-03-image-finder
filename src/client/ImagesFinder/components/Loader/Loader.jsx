import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

function LoaderComponent() {
  return (
    <div className={styles.wrapper}>
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
}

export default LoaderComponent;