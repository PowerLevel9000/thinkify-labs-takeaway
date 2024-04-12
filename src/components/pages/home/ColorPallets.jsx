import React from 'react';
import PropTypes from 'prop-types';
import { useGetColorQuery } from '../../../features/api/colors';

const ColorPallets = ({ handleFunction, backgroundColor }) => {
  const { data, loading, error } = useGetColorQuery();

  // Loading and error handling
  // since we don't have error and loading page in this example,
  //  we will just return a div with the message
  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  return (
    <div className="background-colors">
      {data && data.colors.map((color) => (
        <button
          type="button"
          style={{ backgroundColor: color }}
          key={color}
          className={`color-box ${backgroundColor === color ? 'selected' : ''}`}
          onClick={handleFunction}
        />
      ))}
    </div>
  );
};

ColorPallets.propTypes = {
  handleFunction: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default ColorPallets;
