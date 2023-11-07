import { useState } from "react";
import CardWrapper from "./components/CardWrapper";

const initialPerson = {
  firstName: "Hans",
  lastName: "Zimmer",
  age: 64,
};

function App() {
  const [firstName, setFirstName] = useState("Hans");
  const [randomNumber, setRandomNumber] = useState(0);
  const [isOnline, setIsOnline] = useState(false);
  const [colors, setColors] = useState([
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
  ]);
  const [person, setPerson] = useState(initialPerson);

  const handleAddColor = () => {
    const newColor = prompt("Enter a new color");
    if (newColor) {
      setColors([...structuredClone(colors), newColor]);
    }
  };

  return (
    <>
      <div className="m-5 space-y-3">
        <h1 className="text-3">Info Site</h1>
        <div className="space-y-2">
          <CardWrapper>
            <button onClick={() => setFirstName("Robert")}>Change name</button>
            <div className="">First name: {firstName}</div>
          </CardWrapper>
          <CardWrapper>
            <button onClick={() => setRandomNumber(Math.random())}>
              Change number
            </button>
            <div className="">Random number: {randomNumber.toFixed(2)}</div>
          </CardWrapper>
          <CardWrapper>
            <button onClick={() => setIsOnline(!isOnline)}>
              Change online status
            </button>
            <div className="">
              Online status: {isOnline ? "Online" : "Offline"}
            </div>
          </CardWrapper>
          <CardWrapper>
            <button onClick={() => handleAddColor()}>Add color</button>
            <div className="flex flex-wrap items-center gap-2">
              Colors:{" "}
              {colors.map((color) => (
                <div
                  className="p-1 rounded text-gray-900"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </div>
              ))}
            </div>
          </CardWrapper>
          <CardWrapper>
            <form className="w-full">
              <fieldset className="border w-full rounded border-gray-700 space-y-2 p-2">
                <legend>Person Info</legend>
                <div>
                  <label>
                    First name
                    <input
                      className="ml-2 px-1 rounded-sm"
                      onChange={(e) =>
                        setPerson({ ...person, firstName: e.target.value })
                      }
                      type="text"
                      value={person.firstName}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    First name
                    <input
                      className="ml-2 px-1 rounded-sm"
                      onChange={(e) =>
                        setPerson({ ...person, lastName: e.target.value })
                      }
                      type="text"
                      value={person.lastName}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Age
                    <input
                      className="ml-2 px-1 rounded-sm"
                      onChange={(e) =>
                        setPerson({ ...person, age: e.target.valueAsNumber })
                      }
                      type="number"
                      value={person.age}
                    />
                  </label>
                </div>
              </fieldset>
            </form>
            <div>
              <p>{person.firstName}</p>
              <p>{person.lastName}</p>
              <p>{person.age}</p>
            </div>
          </CardWrapper>
        </div>
      </div>
    </>
  );
}

export default App;
