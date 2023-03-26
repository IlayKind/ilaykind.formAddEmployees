import React from 'react';

const Input = ({label, name, register, error}) => {
	return (
		<>
			<label>{ label }
			<input
				{...register({ name }, {
					required: "Поле обязательно к заполнению"
				})}
				type="text"
			/>
			</label>
		</>
	);
};

export default Input;