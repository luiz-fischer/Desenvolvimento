
import { useState } from 'react'

function useModal() {
	const [entity, setEntity] = useState(null)
    const [isModalOpen, setModalIsOpen] = useState(false)

	return {
		entity,
		setEntity,
        isModalOpen,
        setModalIsOpen
	}
}

export default useModal
