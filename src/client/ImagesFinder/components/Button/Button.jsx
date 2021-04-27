import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css'

function Button({ onClick }) {
    return <button onClick={onClick} className={styles.button}>Load more</button>
};

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

