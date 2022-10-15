import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchTasks } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';

import { getFilter } from 'redux/filter/filterSelectors';
// import { changesFilter } from 'redux/filter/filterSlice';

import { selectAllTasks } from 'redux/tasks/selectors';

import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';



export default function Tasks() {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoading);
    // console.log("Tasks==>isLoading:", isLoading); //!

    const filter = useSelector(getFilter);
    // console.log("Tasks==>filter:", filter); //!

    const contacts = useSelector(selectAllTasks);
    // console.log("Tasks==>contacts:", contacts); //!


    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);



    //! ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //! запись значения из input-(Find contacts by name) в filter
    // const changeFilter = (event) => {
    //     const filterValue = event.currentTarget.value;
    //     dispatch(changesFilter({ filterValue }));
    // };

    //! Создание нового массива объектов из contacts с учетом значения поиска из filter
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            (contact.name.toLowerCase()).includes(normalizedFilter),
        );
    };

    const visibleContacts = getVisibleContacts();
    const totalContacts = contacts.length;




    return (
        <Container>
            <ContactForm />

            <h2>Contacts</h2>
            <p>Total: {totalContacts}</p>

            {isLoading && <Loader />}

            {/* {!isLoading && <ContactList />} */}

            {contacts.length > 0 && !isLoading && (
                <>
                    <Filter
                    // value={filter}
                    // onChange={changeFilter}
                    />
                    <ContactList
                        visibleContacts={visibleContacts}
                    />
                </>
            )}
        </Container>
    );
}
