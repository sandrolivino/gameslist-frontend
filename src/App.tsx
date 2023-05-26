import "./App.css";
import { useState } from "react";
import { useGameData } from "./hooks/useGameData";
import { CreateModal } from "./components/create-modal/create-modal";
import { Card } from "./components/card/card";

function App() {
  const { data } = useGameData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Games</h1>
      <div className="card-grid">
        {data?.map((dataFromUseGameData) => (
          <Card
            title={dataFromUseGameData.title}
            year={dataFromUseGameData.year}
            imgUrl={dataFromUseGameData.imgUrl}
            shortDescription={dataFromUseGameData.shortDescription}
          />
        ))}
      </div>

      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  );
}

export default App;
