import './App.css'
import { Card } from './components/card/card';
import { GameData } from './interface/GameData'

function App() {
  const data: GameData[] = [];

  return (
    <div className="container">
      <h1>Games</h1>
      <div className="card-grid">
        {data.map(gameData => 
        <Card
          title= {gameData.title}
          year={gameData.year}
          imgUrl={gameData.imgUrl}
          shortDescription={gameData.shortDescription}  
        />)}
      </div>
      
    </div>
  )
}

export default App
