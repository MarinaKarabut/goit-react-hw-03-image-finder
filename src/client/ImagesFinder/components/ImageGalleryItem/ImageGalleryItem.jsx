import React from 'react';

import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css'

function ImageGalleryItem({webformatURL,largeImageURL,tags, onClick}) {
    return (
        <li className={styles.imageGalleryItem}>
            <img src={webformatURL}
                alt={tags}
                className={styles.imageGalleryItemImage}
                data-source={largeImageURL}
                onClick={() => onClick(largeImageURL)}
            />
        </li>)
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
    tags: '',
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string
}


