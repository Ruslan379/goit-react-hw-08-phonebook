import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';
// import { Spinner } from 'components/Spinner/Spinner';
import css from './Task.module.css';



export const Task = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteTask(id));

    return (
        <li className={css.ContactListItem}>
            <p className={css.ContactListText}>{name}:
                <span className={css.ContactListNumber}
                > {number}
                </span>
            </p>
            <button
                type="button"
                className={css.ContactListBtn}
                onClick={handleDelete}
            // onClick={() => deleteContact(id)}
            // disabled={isDeleting}
            >
                Delete
                {/* {isDeleting ? [<Spinner size="18" />, " Deleting..."] : "Delete"} */}
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
