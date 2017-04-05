import React from 'react';
import './Note.css';

export const Note = ({children}) =>
  <small className="note"><i>{children}</i></small>;