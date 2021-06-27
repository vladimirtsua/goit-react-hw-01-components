import React from 'react';
import style from './TransactionItem.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ type, currency, amount }) => {
  return (
    <tr className={style.Container__tr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default TransactionItem;