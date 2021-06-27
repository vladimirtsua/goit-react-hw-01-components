import React from 'react';
import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.Item}>
      {isOnline ? (
        <span className={style.Online}></span>
      ) : (
        <span className={style.Ofline}> </span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={style.Text__item}>{name}</p>
    </li>
  );
};



FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;