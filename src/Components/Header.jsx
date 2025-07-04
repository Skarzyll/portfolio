import Navbar from "../Components/Navbar";
import { FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "../Components/SwithTheme";
import { useEffect, useState } from "react";

export default function Header({ className }) {
	const [theme, setTheme] = useState("light");
	const [checked, setChecked] = useState(() => {
		return (
			localStorage.getItem("@dark-mode-react-tailwind:theme-1.0.0") === "dark"
		);
	});

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		localStorage.setItem("@dark-mode-react-tailwind:theme-1.0.0", newTheme);

		setTheme(newTheme);
		setChecked(newTheme === "dark");

		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	useEffect(() => {
		const themeFromLocalStorage = localStorage.getItem(
			"@dark-mode-react-tailwind:theme-1.0.0"
		);

		if (themeFromLocalStorage) {
			setTheme(themeFromLocalStorage);
			setChecked(themeFromLocalStorage === "dark");

			document.documentElement.classList.toggle(
				"dark",
				themeFromLocalStorage === "dark"
			);
		}
	}, []);

	return (
		<div className={className}>
			<Navbar />
			<div className="absolute top-4 right-15 p-0">
				<FormControlLabel
					control={
						<MaterialUISwitch
							className="dark:"
							onChange={toggleTheme}
							checked={checked}
						/>
					}
				/>
			</div>
		</div>
	);
}