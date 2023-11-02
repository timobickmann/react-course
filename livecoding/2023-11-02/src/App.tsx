import states from "./data/states.json";
import image from "./images/image.jpeg";

function App() {
  const title = "Vite React Site";
  const userType = "admin";
  return (
    <>
      <h1 className="highlighted">{title}</h1>
      <p>Hello, world!</p>

      {userType === "admin" ? <p>Admin</p> : <p>Not admin</p>}

      <h2>German states</h2>
      {states.map((state, index) => (
        <p key={index}>{state}</p>
      ))}

      <h2>Image</h2>
      {/* <img src="images/image.jpeg" /> */}
      <img src={image} />
    </>
  );
}

export default App;
