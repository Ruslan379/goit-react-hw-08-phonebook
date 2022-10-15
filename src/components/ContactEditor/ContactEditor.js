import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';

import { selectLoading } from 'redux/contacts/contactsSelectors';
import { Spinner } from 'components/Spinner/Spinner';

import css from './ContactEditor.module.css';


export const ContactEditor = ({ id, name, number, toggleModal }) => {
    // export const ContactEditor = ({ id, toggleModal }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoading);
    // console.log("ContactListItem==>isLoading:", isLoading); //!

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const newName = form.elements.name.value;
        const newNumber = form.elements.number.value;

        if (newName !== "" && newNumber !== "") {
            dispatch(editContact({ id, newName, newNumber }));
            form.reset();
            toggleModal()
            return;
        }
        alert('Заполни поля Name и Number');
    };



    return (
        <form
            className={css.FormEdit}
            onSubmit={handleSubmit}
        >

            <label
                className={css.FormLabelEdit}
            >
                {/* Name */}
                {isLoading ? "Wait for add..." : "Name"}
                <br />
                <input
                    className={css.FormInputEdit}
                    id="inputName"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    defaultValue={name}
                // onChange={handleChange}
                />
            </label>
            <br />

            <label className={css.FormLabelEdit}>
                {/* Number */}
                {isLoading ? "..." : "Number"}
                <br />
                <input
                    className={css.FormInputEdit}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    defaultValue={number}
                // onChange={handleChange}
                />
            </label>
            <br />

            <button
                className={css.FormBtnEdit}
                type="submit"
                disabled={isLoading}
            >
                {/* Edit contact */}
                {isLoading ? <Spinner size="32">Add contact</Spinner> : "Edit contact"}

            </button>
        </form>
    );
}

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };







    // const dispatch = useDispatch();

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.currentTarget;
    //     const text = form.elements.text.value;
    //     if (text !== '') {
    //         dispatch(addTask(text));
    //         form.reset();
    //         return;
    //     }
    //     alert('Заполни текст заметки.');
    // };

    // return (
    //     <form className={css.form} onSubmit={handleSubmit}>
    //         <input name="text" className={css.input} />
    //         <button type="submit" className={css.button}>
    //             Add todo
    //         </button>
    //     </form>
    // );

