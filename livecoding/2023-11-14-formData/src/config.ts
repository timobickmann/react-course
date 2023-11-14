export const environment = import.meta.env.VITE_ENVIRONMENT;

let debugging = true;

if (environment !== "development") {
	debugging = false;
}

export { debugging };
