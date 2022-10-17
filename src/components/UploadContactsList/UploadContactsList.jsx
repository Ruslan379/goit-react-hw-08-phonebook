import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/UploadContactsList/UploadContactsList.module.css' 




export const UploadContactsList = ({ uploadContacts }) => (
  <ul className={css.ContactList}>
    {uploadContacts.map(({ id, name, number }) => (
      <li
        key={id}
        className={css.ContactListItem}
      >
        <p
          className={css.ContactListText}>{name}:
          <span
            className={css.ContactListNumber}
          > {number}
          </span>
        </p>
        <button
          type="button"
          className={css.ContactListBtn}
          // onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);


UploadContactsList.propTypes = {
  uploadContacts: PropTypes.array.isRequired
  // onDeleteTodo: PropTypes.func.isRequired,
};


