import "./App.css";
import WorldMap from "./WorldMap";
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
        <WorldMap></WorldMap>
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

      <div className="top">
        <div className="additional-info">
          {selectedAnimalData.length >= 0
            ? "Click to reveal additio8nal info"
            : "Click to reveal additional info"}
        </div>
      </div>
      <img
        width={200}
        style={{
          objectFit: "cover",
        }}
        src={
          "https://wildscapia.com/wp-content/uploads/2020/05/amur-leopard-4112011_1280.jpg"
        }
      />
    </>
  );
};

export default App;
