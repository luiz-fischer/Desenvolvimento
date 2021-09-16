import React, { useContext } from "react"
import { ThemeContext, ThemeProvider } from "../../contexts/ThemeContext"
import Toggle from "./Toggle"

function Theme({ defaultTheme, children }) {
	return (
		<ThemeProvider defaultTheme={defaultTheme}>
			<ThemeChoosing>{children}</ThemeChoosing>
		</ThemeProvider>
	)
}

function ThemeChoosing({ children }) {
	const { isDark } = useContext(ThemeContext)

	return (
		<div className={!isDark() ? "light" : "dark text-white"}>
			<div className="absolute top-0 end-0 p-2 z-5">
                <Toggle></Toggle>
			</div>
			{children}
		</div>
	)
}

export default Theme
