import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import css from 'components/Filter/Filter.module.css' 

import { getFilter } from 'redux/filter/filterSelectors';
import { changesFilter } from 'redux/filter/filterSlice';


// export const Filter = ({ value, onChange }) => {
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  console.log("Filter==>filter:", filter); //!

//! запись значения из input-(Find contacts by name) в filter
    const changeFilter = (event) => {
        const filterValue = event.currentTarget.value;
        dispatch(changesFilter({ filterValue }));
    };


  return (
    <label className={css.FilterLabel}>
      Find contacts by name
      <input
        className={css.FilterInput}
        type="text"
        // value={value}
        value={filter}
        // onChange={onChange}
        onChange={changeFilter}
      />
    </label>
)};


// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

