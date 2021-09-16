import { useState } from "react"

const THEME_DARK = "dark";
const THEME_LIGHT = "light";

function useTheme(defaultTheme = THEME_LIGHT) {
	const [theme, setTheme] = useState(defaultTheme)

	function validateTheme(themeValue) {
		if (themeValue === THEME_DARK) {
			setTheme(THEME_DARK)
		} else {
			setTheme(THEME_LIGHT)
		}
	}

  function isDark() {
    return theme === THEME_DARK;
  }

	return {
		theme,
		setTheme: validateTheme,
    isDark
	}
}

export default useTheme
