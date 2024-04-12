import React from 'react';
import PropTypes from 'prop-types';

const Title = ({
  title, subTitle, backgroundColor, style = {},
}) => (
  <div className="title-card" style={{ ...style, background: backgroundColor }}>
    <h2>{title}</h2>
    <p>{subTitle}</p>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default Title;
