import './App.css'
import { Card } from './components/card/card';
import { useGameData } from './hooks/useGameData';

function App() {
  const { data } = useGameData();

  return (
    <div className="container">
      <h1>Games</h1>
      <div className="card-grid">
        {data?.map(dataFromUseGameData => 
        <Card
          title= {dataFromUseGameData.title}
          year={dataFromUseGameData.year}
          imgUrl={dataFromUseGameData.imgUrl}
          shortDescription={dataFromUseGameData.shortDescription}  
        />)}
      </div>
      
    </div>
  )
}

export default App
