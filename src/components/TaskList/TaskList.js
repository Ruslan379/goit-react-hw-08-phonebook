// import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
// import { selectAllTasks } from 'redux/tasks/selectors';
import css from './TaskList.module.css';

export const TaskList = ({ visibleContacts }) => {
    // const tasks = useSelector(selectAllTasks);
    // console.log("TaskList==>tasks:", tasks); //!

    return (
        <ul className={css.ContactList}>
            {visibleContacts.map(({ id, name, number }) => (
                <Task
                    key={id}
                    // key={Number(id)}
                    id={id}
                    // id={Number(id)}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    );



    // return (
    //     <ul className={css.list}>
    //         {tasks.map(({ id, text }) => (
    //             <li key={id}>
    //                 <Task id={id} text={text} />
    //             </li>
    //         ))}
    //     </ul>
    // );
};


// ContactList.propTypes = {
//     visibleContacts: PropTypes.array.isRequired,
// };