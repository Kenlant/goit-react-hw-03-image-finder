import { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  render() {
    const {
      Searchbar: searchBarClassName,
      SearchForm: searchFormClassName,
      [`SearchForm-button`]: searchFormBtnClassName,
      [`SearchForm-button-label`]: searchFormBtnLabelClassName,
      [`SearchForm-input`]: searchFormInputClassName,
    } = styles;

    return (
      <header className={searchBarClassName}>
        <form className={searchFormClassName}>
          <button className={searchFormBtnClassName} type="submit">
            <span className={searchFormBtnLabelClassName}>Search</span>
          </button>

          <input
            className={searchFormInputClassName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
