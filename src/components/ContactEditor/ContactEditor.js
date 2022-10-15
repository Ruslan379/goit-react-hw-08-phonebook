import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';
import PropTypes from 'prop-types';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { selectAllContacts, selectLoading } from 'redux/contacts/contactsSelectors';
import { Spinner } from 'components/Spinner/Spinner';

import css from './ContactEditor.module.css';


export const ContactEditor = ({ id, name, number, toggleModal }) => {
    const dispatch = useDispatch();

    const contacts = useSelector(selectAllContacts);
    // console.log("Contacts==>contacts:", contacts); //!

    const isLoading = useSelector(selectLoading);
    // console.log("ContactListItem==>isLoading:", isLoading); //!

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const newName = form.elements.name.value;
        const newNumber = form.elements.number.value;

        if (
            contacts.find(item => item.name.toLowerCase() === newName.toLowerCase())
        ) {
            alert(`${name} уже есть в контактах.`);
            // toast.error(`${newName} уже есть в контактах.`); //! Повторяется два раза ???
            form.reset();
            return;
        }

        dispatch(editContact({ id, newName, newNumber }));
        form.reset();
        toggleModal()
        return;

    };



    return (
        <>
            <form
                className={css.FormEdit}
                onSubmit={handleSubmit}
            >

                <label
                    className={css.FormLabelEdit}
                >
                    {/* Name */}
                    {isLoading ? "Please wait..." : "Name"}
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
            {/* <ToastContainer autoClose={1500} theme={"colored"} /> */}
        </>
    );
}

ContactEditor.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
};


