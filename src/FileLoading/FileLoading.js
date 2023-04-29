import React from 'react';
import chartdata from './chartdata';

export const FileLoading = () => {
  const uniqueObservations = chartdata.reduce((unique, item) => {
    if (!unique.includes(item.observationtext)) {
      unique.push(item.observationtext);
    }
    return unique;
  }, []);

  return (
    <div style={{ textDecorationColor: 'red', height: 700, width: 200, overflow: 'auto', flexDirection: 'column-reverse' }}>
      {uniqueObservations.map((observation) => (
        <div key={observation}>
          <label style={{ marginBottom: 10 }}>{observation}</label>
          
          <li><i className="fa fa-view" /></li>
        </div>
      ))}
    </div>
  );
};