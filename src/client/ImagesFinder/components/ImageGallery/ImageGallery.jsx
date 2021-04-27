import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'


import styles from './ImageGallery.module.css'

function ImageGallery({ images, onClick}) {
    const imagesElement = images.map(({id, ...image}) => (
        <ImageGalleryItem key={id} {...image} onClick={onClick }/>))
    return (
        <ul className={styles.imageGallery}>
            {imagesElement}
        </ul>
    )
};

export default ImageGallery;

ImageGallery.defaultProps = {
    images: [],
}


ImageGallery.propTypes = {
    images: PropTypes.array,
  }
