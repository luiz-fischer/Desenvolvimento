import React, { createContext } from "react"

import useTheme from "../hooks/useTheme"

export const ThemeContext = createContext()

function ThemeProvider({ children, defaultTheme }) {
	const { theme, setTheme, isDark } = useTheme(defaultTheme)

	return (
		<ThemeContext.Provider value={{ setTheme, theme, isDark }}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeProvider }
