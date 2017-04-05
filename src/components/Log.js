import React from 'react';

export const Log = ({date, children}) =>
  <div>
    <h2>{date}</h2>
    {children}
  </div>;

Log.propTypes = {
  date : React.PropTypes.string.isRequired
};