import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render({ src, alt }) {
    const {
      ImageGalleryItem: imageGalleryItemClassName,
      [`ImageGalleryItem-image`]: imageGalleryItemImgClassName,
    } = styles;

    return (
      <li className={imageGalleryItemClassName}>
        <img className={imageGalleryItemImgClassName} src={src} alt={alt} />
      </li>
    );
  }
}
