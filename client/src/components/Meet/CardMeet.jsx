import React from 'react';

export default function CardMeet({ children }) {
  return (
    <div>
      <div>
        Reunion programada: <span>Asesoria aleman</span>
      </div>
      <span></span>
      {children}
    </div>
  );
}
