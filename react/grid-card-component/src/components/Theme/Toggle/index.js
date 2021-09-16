import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

import s from "./Toggle.module.scss"

const Toggle = () => {
	const { isDark, setTheme } = useContext(ThemeContext)
	return (
		<>
			<input
				type="checkbox"
				id="toggle-mode-cb"
				checked={isDark()}
                role="checkbox"
				className={s.cb}
				onChange={e => {
					setTheme(e.target.checked ? "dark" : "light")
				}}
			/>
			<label
				id="toggle-mode"
				className={`${s.mode} ${isDark() ? s["mode--checked"] : ""}`}
				htmlFor="toggle-mode-cb"
                title="Dark mode"
			>
				<span className={`shadow-sm ${s.border}`}>
					<span className={s.indicator}></span>
				</span>
			</label>
		</>
	)
}

export default Toggle
