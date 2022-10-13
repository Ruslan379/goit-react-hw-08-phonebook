import { useEffect } from 'react'; //! +++
// import { useEffect, useState } from 'react'; //! +++
import { useDispatch, useSelector } from "react-redux"; //! +++

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import * as itemsOperations from 'redux/items/itemsOperations'; 
// import { itemsOperations } from 'redux'; //! ТАК НЕ РАБОТАЕТ с Re-export

// import { getContacts } from 'redux/items/itemsSelectors'; 
import { getFilter } from 'redux/filter/filterSelectors';
// import { getIsLoading } from 'redux/isLoading/isLoadingSelectors'; 
// import { getError } from 'redux/error/errorSelectors';

// import { itemsSelectors, filterSelectors } from 'redux'; //! ТАК НЕ РАБОТАЕТ с Re-export

import { changesFilter } from 'redux/filter/filterSlice'; 

import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';

import {
  useGetAddAllContactsQuery,
  usePostAddContactMutation,
  // useDeleteContactMutation
} from 'redux/items/itemsSliceRTKQuery'; 

//? +++++++++++
import {
  // useFetchCurrentUserQuery,
  // useRegisterMutation,
  useLogInMutation,
  // useLogOutMutation
} from 'redux/auth/authSliceRTKQuery';
//________________________________________________________________________

export const App = () => {
  //! +++++++ Хук useDispatch +++++++++++++
  const dispatch = useDispatch();

  // const [token, setToken] = useState(null);

  //! ++++++++++++++++++ Хук useSelector  ++++++++++++++++++
  //! читает данные из state Redux-хранилища и подписывается на их обновление
  const filter = useSelector(getFilter); 



//!---------------------------- GET with RTK Query ----------------------------------
  const { data = [], isFetching: isLoading, isError, error} = useGetAddAllContactsQuery();

      const contacts = data.map(item => {
        return {
          id: item.id,
          name: item.name,
          number: item.phone
        };
      });

  
  
//? +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
  //! --------------Добавленные user -------------------
  // const user1 = {
  //   name: "Ruslan Fate",
  //   email: "fate@gmail.com",
  //   password: "poi098lkj",
  //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJkOGQxNzk2NTEyNDAwMTU2NjQ3NzEiLCJpYXQiOjE2NjM5MzU3MDN9.Ja86dGO7ckcKceXHZbEH780ZCW1RhnCwcdzLpo8nvUQ"
  // };

  // const user2 = {
  //   name: "Egor Rudik",
  //   email: "egor@gmail.com",
  //   password: "rty543yui"
  // };

  // const user3 = {
  //   name: "Sergej Fedorchuk",
  //   email: "fedorchuk@gmail.com",
  //   password: "ghf479lkf"
  // };

  //! Залогиненый контакт
  // const user4 = {
  //   name: "Sonya Furkina",
  //   email: "furkina@gmail.com",
  //   password: "nbhy7564kjuy"
  // };
  
  
  //! -------------- Создать нового пользователя -------------------
  // const [addUser] = useRegisterMutation();
  
  // const user4 = {
  //   name: "Sonya Furkina",
  //   email: "furkina@gmail.com",
  //   password: "nbhy7564kjuy",
  //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJkYTc4Njk2NTEyNDAwMTU2NjRmZTYiLCJpYXQiOjE2NjM5MzYzOTB9.buFFKqaIUZcEFEE2Mhi3c8MuYJtKWWmYRccYZoeKxkk"
  // };
  
  // useEffect(() => {
  //   addUser(user4).unwrap()
  // }, []);
  //! --------------Залогинить пользователя -------------------
  // const [userlogIn, { data: dataLogin }] = useLogInMutation();
  const [userlogIn] = useLogInMutation();

  useEffect(() => {
    const user2logIn = {
    email: "furkina@gmail.com",
    password: "nbhy7564kjuy",
  };
    
    userlogIn(user2logIn).unwrap();
    // setToken(dataLogin);
    // console.log( "token:", token); //!
  }, [userlogIn]);

    // console.log( "dataLogin:", dataLogin); //!
  // 
  // console.log( "token:", token); //!
//! --------------Получить информацию о текущем пользователе -------------------
  // const { data: userInfo } = useFetchCurrentUserQuery();
  // console.log( "userInfo:", userInfo); //!

//! -------------- Разлогинить пользователя -------------------
  // const [userlogOut] = useLogOutMutation();

  // useEffect(() => {
  //   userlogOut("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJkYTc4Njk2NTEyNDAwMTU2NjRmZTYiLCJpYXQiOjE2NjM5Mzc2NzZ9.T6h44Ayevsukp8w40r50D_pPhWtt_1z0GhU3bEPnzuk").unwrap()
  // }, [userlogOut]);
  
  //? ___________________________________________________________


//!--------------------------- POST with RTK Query ---------------------------------
  const [addContact, { isLoading: isUpdating }] = usePostAddContactMutation();

  //! Принимаем (name, number) из ContactForm
  //! alert с предупреждением о наявности контакта
  const formSubmitHandler = (name, number) => {
    if (
      contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.warning(`${name} уже есть в контактах.`); 
      return;
    } 
      const addNewContact = { name, phone: number };
      //! Делаем запрос на добавление контакта из mockapi.io/contacts 
      addContact(addNewContact).unwrap()
  };




//!---------------------------- DELETE with RTK Query --------------------------------
//! Перенесенн в ContactList



  //! запись значения из input-(Find contacts by name) в filter
  const changeFilter = (event) => {
    const filterValue = event.currentTarget.value; 
    dispatch(changesFilter({filterValue}));
  };



  //! Создание нового массива объектов из contacts с учетом значения поиска из filter
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      (contact.name.toLowerCase()).includes(normalizedFilter),
    );
  };



  const visibleContacts = getVisibleContacts();
  const totalContacts = contacts.length;



// * +++++++++++++++++++++++++++ MARKUP ++++++++++++++++++++++++++++++++++
    return (
      <Container>

        <h1>Phonebook HW-8<span style={{ fontSize: "20px" }}> (with ...)</span></h1>

        <ContactForm
          onSubmit={formSubmitHandler}
          addition={isUpdating}
        />

        <h2>Contacts</h2>
        <p>Total: {totalContacts}</p>

      {isError && (
          <div style={{ margin: '0 auto', color: 'red' }}>
            <h1>The request failed:</h1>
            <h2 style={{ textDecoration: "underline", fontStyle: 'italic', color: '#a10000' }}>!!! {error.data}</h2>
          </div>
        )}

        {isLoading && <Loader />}
      
        {contacts.length > 0 && !isLoading && (
          <>
            <Filter
              value={filter}
              onChange={changeFilter}
            />  

            <ContactList
              visibleContacts={visibleContacts}
              // onDeleteContact={deleteContact} //? уже не надо с RTK Query
              // deleting={isDeleting} //? уже не надо с RTK Query
            />
          </>
        )}

        <ToastContainer autoClose={1500} theme={"colored"} />
        
      </Container>
    );
  }
