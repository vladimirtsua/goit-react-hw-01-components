import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ name, tag, location, stats, avatar }) => {
  return (
    <div className={style.Container}>
      <div className={style.Profile}>
        <div className={style.Description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            width="200px"
            className={style.Avatar}
          />
          <p className={style.Name}>{name}</p>
          <p className={style.Tag}>@{tag}</p>
          <p className={style.Location}>{location}</p>
        </div>

        <ul className={style.Stats}>
          <li className={style}>
            <span className="label">Followers : </span>
            <span className="quantity"> {stats.followers}</span>
          </li>
          <li>
            <span className="label">Views : </span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes : </span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;