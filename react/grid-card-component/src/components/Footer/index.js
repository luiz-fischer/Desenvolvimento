import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const Footer = () => {
	const { isDark } = useContext(ThemeContext)
	return (
		<footer className={`text-center py-4 border-top border-1`}>
			<a
				href="https://lvidal.pe"
				target="_blank"
				rel="noopener noreferrer"
                className={`${isDark()? 'text-white':'text-dark'}`}
			>
				Powered by Leonardo Vidal
			</a>
		</footer>
	)
}

export default Footer
