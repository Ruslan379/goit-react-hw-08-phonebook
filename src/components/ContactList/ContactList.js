// import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
// import { selectAllTasks } from 'redux/tasks/selectors';
import css from './ContactList.module.css';

export const ContactList = ({ visibleContacts }) => {
    // const contacts = useSelector(selectAllTasks);
    // console.log("ContactList==>contacts:", contacts); //!

    return (
        <ul className={css.ContactList}>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactListItem
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