import React from 'react';
import logo from './logo.svg';
import './App.css';

type topCarsType = {
  manufacturer: string
  model: string
}

function App() {
  const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ]
  const mappedTopCars: any = topCars.map((item, index) => {
    return (
      <table key={index + 1}>
        <tr>
          <td>{index + 1}.</td>
          <td>{item.manufacturer}</td>
          <td>{item.model}</td>
        </tr>
      </table>
    )
  })
  return (
    <>{mappedTopCars}</>
  );
}

export default App;
