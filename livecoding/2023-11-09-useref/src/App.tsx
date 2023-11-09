import { useState } from "react";
import Header from "./components/Header";
import LoggedInPage from "./components/LoggedInPage";
import { LoginForm } from "./components/LoginForm";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

			{isLoggedIn ? <LoggedInPage /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
		</>
	);
}

export default App;
