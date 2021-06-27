import React from 'react';
import StatisticItem from '../StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import style from './StatisticsList.module.css';

const RandomColorForItem = () => {
  const x = Math.random() * 255;
  return x.toFixed(0);
};

const StatisticsList = ({ statisticalData, title }) => {
  return (
    <section className={style.Statistics}>
      <div>
        {title.length > 0 && <h2 className="title">{title}</h2>}
        <ul className={style.Stat__list}>
          {statisticalData.map(({ id, label, percentage }) => {
            return (
              <li
                key={id}
                className="item"
                style={{
                  backgroundColor: `rgb(${RandomColorForItem()}, ${RandomColorForItem()}, ${RandomColorForItem()})`,
                }}
              >
                {<StatisticItem format={label} percent={percentage} />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};


StatisticsList.propTypes = {
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string,
};

export default StatisticsList;