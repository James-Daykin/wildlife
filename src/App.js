import "./App.css";
import WorldMap from "./WorldMap";
import { useSelector } from "react-redux";

const App = () => {
  const countryAnimals = useSelector((s) => s?.animalSlice?.animalData);
  return (
    <>
      <div className="top">
        <h2 className="titletext">heyy2</h2>
        <WorldMap></WorldMap>
        {countryAnimals && <h1>{countryAnimals}</h1>}
        <img
          width={200}
          style={{
            objectFit: "cover",
          }}
          src={
            "https://wildscapia.com/wp-content/uploads/2020/05/amur-leopard-4112011_1280.jpg"
          }
        />
      </div>
    </>
  );
};

export default App;
