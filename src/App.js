import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const datayay = [
  { fruit: 'Apple', anshi: 4000, muralini: 2400},
  { fruit: 'Banana', anshi: 300, muralini: 1398},
  { fruit: 'Cucumber', anshi: 2000, muralini: 9800},
  { fruit: 'Dates', anshi: 9000, muralini: 3908},
  { fruit: 'Eggplant', anshi: 300, muralini: 4800},
  { fruit: 'Fig', anshi: 2390, muralini: 200},
  { fruit: 'Grapes', anshi: 9000, muralini: 9000}
];

function App() {
  return (
   
      <header className="app-headers">
        <h1>how much anshi and muralini like fruit and veggies!!!!!!!!!!</h1>
        <div>
          <BarChart width={window.innerWidth - 100} height={window.innerHeight - 100} data={datayay}>
          <CartesianGrid/>
            <XAxis dataKey="fruit" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="anshi" fill="#9a1d2e" />
            <Bar dataKey="muralini" fill="#546E7A" />
          </BarChart>
        </div>
      </header>

  );
}

export default App;
