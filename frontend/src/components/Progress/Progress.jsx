import React, { useState, useEffect, useRef } from 'react';
import './Progress.css';

const CircularProgress = ({ identifier, startValue, endValue, circleColor }) => {
  const [progressValue, setProgressValue] = useState(endValue);

  useEffect(() => {
    // Set progress value to endValue when component mounts
    setProgressValue(endValue);
  }, [endValue]);

  return (
    <div id={`circular-progress-${identifier}`} className="circular-progress" style={{ background: `conic-gradient(${circleColor} ${progressValue * 3.6}deg, #6c6c6c 0deg)` }}>
      <span className="progress-value">{`${progressValue}%`}</span>
    </div>
  );
};

export default CircularProgress;
