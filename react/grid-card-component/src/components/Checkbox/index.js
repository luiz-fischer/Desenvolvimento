import s from './Checkbox.module.scss'

const Checkbox = ({ id, text, onToggle, checked }) => {
	const onCheckboxChange = (checked, text) => {
		onToggle(checked, text)
	}

	return (
		<div className={s.checkbox}>
			<input
				id={id}
				type="checkbox"
				checked={checked}
				onChange={e => {
					onCheckboxChange(e.target.checked, text)
				}}
			/>
			<label htmlFor={id} aria-labelledby={id}>
				{text}
			</label>
		</div>
	)
}

export default Checkbox
