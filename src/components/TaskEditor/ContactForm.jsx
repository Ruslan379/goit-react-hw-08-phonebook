import { useState } from 'react';
import PropTypes from 'prop-types';

import { Spinner } from 'components/Spinner/Spinner';

import css from 'components/ContactForm/ContactForm.module.css' 




// export const ContactForm = ({ onSubmit, addition }) => {
export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (name !== "" && number !== "") {
        dispatch(addTask({name, number}));
      form.reset();
      return;
    }
    alert('Заполни текст заметки.');
  };



//! Ввод значений в поля инпутов
  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };



  //! Очистка полей ФОРМЫ
  //   const reset = () => {
  //     setName('');
  //     setNumber('');
  // };



 



// * +++++++++++++++++++++++++++ MARKUP ++++++++++++++++++++++++++++++++++
    return (
      <form
        className={css.Form}
        onSubmit={handleSubmit}
      >

        <label
          className={css.FormLabel}
        >
          Name
          {/* {addition ? "Wait for add..." : "Name"} */}
          <br />
          <input
            className={css.FormInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={name}
            // onChange={handleChange}
            />
        </label>
        <br />

        <label className={css.FormLabel}>
            {addition ? "..." : "Number"}
            <br />
            <input
              className={css.FormInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // value={number}
              // onChange={handleChange}
            />
          </label>
          <br />

        <button
          className={css.FormBtn}
          type="submit"
          // disabled={addition}
        >
          Add contact
          {/* {addition ? <Spinner size= "32">Add contact</Spinner>  : "Add contact"} */}
          </button>
        </form>
    );
  } 


  
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};