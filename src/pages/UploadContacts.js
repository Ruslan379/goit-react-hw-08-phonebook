// import axios from 'axios';
// import { useState } from 'react';

// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'components/Container/Container';
import { fetchContactsFromMmockapiIo } from 'redux/uploadContacts/uploadContactsOperations';
import { getUploadContacts } from 'redux/uploadContacts/uploadContactsSelectors';
import { UploadContactsList } from 'components/UploadContactsList/UploadContactsList';




export default function UploadContacts() {
  const dispatch = useDispatch();

  const uploadContacts = useSelector(getUploadContacts);
  console.log("Contacts==>uploadContacts:", uploadContacts); //!


  // useEffect(() => {
  //   dispatch(fetchContactsFromMmockapiIo());
  // }, [dispatch]);

  const handlUploadContacts = () => dispatch(fetchContactsFromMmockapiIo());

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const file = e.target.file.files[0];
  //   const formData = new FormData();
  //   formData.append('image', file, file.name);

  //   axios
  //     .post('какой-то адрес куда скажет бекендщик', formData)
  //     .then(console.log)
  //     .catch(console.error);
  // };

  return (
    <Container>
      <button
        type="button"
        // className={css.ContactListEditBtn}
        onClick={handlUploadContacts}
      // disabled={isLoading}
      >
        Загрузить контакты c API: mockapi.io
      </button>
      <UploadContactsList uploadContacts={uploadContacts} />
      <button
        type="button"
      >
        Добавить контакты c API: mockapi.io в список контактов
      </button>
    </Container>
  );
}
