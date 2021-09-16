import React, { createContext } from "react"
import useModal from "../hooks/useModal"

const ModalContext = createContext()

function ModalProvider({ children }) {
	const { entity, setEntity, isModalOpen, setModalIsOpen } = useModal()

	return (
		<ModalContext.Provider
			value={{
				entity,
				setEntity,
				isModalOpen,
				setModalIsOpen
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export { ModalContext, ModalProvider }
