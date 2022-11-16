import { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>{children}</div>
      </div>
    );
  }
}
