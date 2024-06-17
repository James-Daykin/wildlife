import "./App.css";
import Body from "./Body";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AnimalCard from "./Card";
import { fetchAnimalData } from "./animalSlice";
import Modal from "./Modal";

const App = () => {
  const countryAnimals = useSelector((s) => s?.animals?.animalData);
  const selectedAnimalData = useSelector((s) => s?.animals?.selectedAnimal);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  console.log(isModalOpen);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        name={selectedAnimalData.name}
        description={selectedAnimalData.description}
        image={selectedAnimalData.image}
        onClickFunction={() => setIsModalOpen(false)}
      />
      <div className="top">
        <h2 className="titletext">Endangered Species</h2>
        <Body></Body>
      </div>
      {countryAnimals && (
        <div className="animal-cards-container">
          {countryAnimals.map((animal, index) => (
            <AnimalCard
              key={index}
              name={animal.name}
              image={animal.image}
              endangeredStatus={animal.conservationStatus}
              continent={animal.continent}
              onClickFunction={() => {
                dispatch(fetchAnimalData(animal.id));
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      )}
      {countryAnimals.length === 0 && (
        <div className="top">
          <div className="additional-info">
            Select a Continent to pull Endangered Species data from my Express
            API
          </div>
        </div>
      )}
    </>
  );
};

export default App;
