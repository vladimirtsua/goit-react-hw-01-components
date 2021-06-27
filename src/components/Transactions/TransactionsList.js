import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import style from './TransactionsList.module.css';
import PropTypes from 'prop-types';

const TransactionsList = ({ Transactions }) => {
  return (
    <table className={style.Transaction__history}>
      <thead className={style.Header__table}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {Transactions.map(({ type, id, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionsList.propTypes = {
  Transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionsList;