// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

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
};


ContactList.propTypes = {
    visibleContacts: PropTypes.array.isRequired,
};