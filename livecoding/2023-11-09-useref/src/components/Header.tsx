function Header({
	isLoggedIn,
	setIsLoggedIn,
}: {
	isLoggedIn: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
}) {
	return (
		<>
			<header className="flex justify-between">
				<h1 className="text-3xl">Running Site</h1>
				{isLoggedIn && (
					<button onClick={() => setIsLoggedIn(false)}>Logout</button>
				)}
			</header>
		</>
	);
}
export default Header;
