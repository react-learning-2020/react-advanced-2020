import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  console.log(image, name, price);
  return <article className='product'>
    <img src={image.url} alt={name} />
    <h4>{name}</h4>
    <p>{price}</p>
  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

Product.defaultProps = {
  name: 'missing',
  price: 0.00,
  image: defaultImage
}

export default Product;
