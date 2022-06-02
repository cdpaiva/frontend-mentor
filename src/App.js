import { useState } from 'react'
import SideMenu from './components/SideMenu'
import Card from './components/Card'
import dataSource from './data.json'

function App() {
  const [period, setPeriod] = useState('weekly');

  return (
    <div className="grid">
      <SideMenu period={period} setPeriod={setPeriod}/>
      {
        dataSource.map(card => <Card period={period} title={card.title} timeframes={card.timeframes} key={card.title}/>)
      }
    </div>
  );
}

export default App;
