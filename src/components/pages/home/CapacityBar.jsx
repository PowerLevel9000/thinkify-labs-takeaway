import React from 'react';
import { useSelector } from 'react-redux';
import getColor from '../../../lib/getColorByPercent';
import Title from './Title';

const CapacityBar = () => {
  const { titleCount } = useSelector((state) => state.title);

  // Calculate the percentage of title count out of the maximum capacity
  const percentage = (titleCount / 6) * 100;

  return (
    <>
      <div className="wrapper">
        <div className="outer">
          <div
            className="progress"
            style={{ width: `${percentage}%`, backgroundColor: getColor(percentage) }}
          />
        </div>
        <div className="warning">
          {titleCount > 6 ? <span>Capacity Full</span> : (
            <span>
              Capacity:
              {titleCount}
              /6
            </span>
          )}
        </div>
      </div>
      {percentage === 100 && (
        <Title
          title="Warning"
          subTitle={"Adding Capacity is Full but don't worry it just a warning, and who cares warnings tell me when we have error 😁😁😁"}
          backgroundColor="rgba(242, 154, 47, 0.821)"
          style={{
            marginTop: '20px',
            color: '#fff',
            width: '100%',
          }}
        />
      )}
    </>
  );
};

export default CapacityBar;
