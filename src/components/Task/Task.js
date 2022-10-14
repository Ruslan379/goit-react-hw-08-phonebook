import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editContact } from 'redux/tasks/operations';

import { selectLoading } from 'redux/tasks/selectors';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { Spinner } from 'components/Spinner/Spinner';
import css from './Task.module.css';



export const Task = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoading);
    console.log("Tasks==>isLoading:", isLoading); //!

    const handleDelete = () => dispatch(deleteTask(id));

    //! +++++++++++++++++++++++++++++++++++
    const handleEdit = () => {
        const newName = "RoseEDIT"
        const newNumber = "000-00-00"
        console.log("id:", id);
        console.log("newName:", newName);
        console.log("newNumber:", newNumber);

        // TaskEditor(newName, newNumber)

        dispatch(editContact({ id, newName, newNumber }))
    };
    //! +++++++++++++++++++++++++++++++++++



    return (
        <li className={css.ContactListItem}>
            <p className={css.ContactListText}>{name}:
                <span className={css.ContactListNumber}
                > {number}
                </span>
            </p>
            <button
                type="button"
                className={css.ContactListEditBtn}
                onClick={handleEdit}
                // onClick={() => deleteContact(id)}
                disabled={isLoading}
            >
                {/* Edit */}
                {isLoading ? [<Spinner size="18" />, " Editing..."] : "Edit"}
            </button>
            <button
                type="button"
                className={css.ContactListDeleteBtn}
                onClick={handleDelete}
                // onClick={() => deleteContact(id)}
                disabled={isLoading}
            >
                {/* Delete */}
                {isLoading ? [<Spinner size="18" />, " Deleting..."] : "Delete"}
            </button>
        </li>
    );
};



// export const Task = ({ id, text }) => {
//     const dispatch = useDispatch();
//     const handleDelete = () => dispatch(deleteTask(id));

//     return (
//         <div className={css.wrapper}>
//             <p className={css.text}>{text}</p>
//             <button type="button" className={css.button} onClick={handleDelete}>
//                 Delete
//             </button>
//         </div>
//     );
// };


// ContactListItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     // id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// };
