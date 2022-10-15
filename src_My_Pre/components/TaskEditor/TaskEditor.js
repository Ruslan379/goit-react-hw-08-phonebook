import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import css from './TaskEditor.module.css';


// export const TaskEditor = (nameValue = "rus", numberValue = "") => {
export const TaskEditor = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        // e.currentTarget.elements.name.value = "Ruslan";
        // e.currentTarget.elements.number.value = numberValue;

        // document.querySelector('#inputName').value = "nameValue";


        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if (name !== "" && number !== "") {
            dispatch(addTask({ name, number }));
            form.reset();
            return;
        }
        alert('Заполни текст заметки.');
    };

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
                    id="inputName"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                // value={nameValue}
                // onChange={handleChange}
                />
            </label>
            <br />

            <label className={css.FormLabel}>
                Number
                {/* {addition ? "..." : "Number"} */}
                <br />
                <input
                    className={css.FormInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                // value={numberValue}
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

