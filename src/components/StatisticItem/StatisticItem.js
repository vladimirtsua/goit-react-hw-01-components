import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ format, percent }) => (
  <>
    <span className="label">{format}</span>
    <span className="percentage">{percent} %</span>
  </>
);

StatisticItem.propTypes = {
  format: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default StatisticItem;