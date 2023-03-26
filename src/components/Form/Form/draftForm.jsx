import React, { useState } from 'react';
import './form.scss'

const FormAddEmployees = () => {
	const [form, setForm] = useState({
		first_name: "",
		middle_name: "",
		last_name: "",
		direction: "",
		card_id: "",
	});
	
	const handleChange = (e) =>{
		setForm( {...form, [e.target.name]: e.target.value} )
	}
	
	return (
		<div className="form">
				<input
					name="first_name"
					type="text"
					onChange={ handleChange }
					value={form.first_name}
				/>
				<input
					name="middle_name"
					type="text"
					onChange={ handleChange }
					value={form.middle_name}
				/>
				<input
					name="last_name"
					type="text"
					onChange={ handleChange }
					value={form.last_name}
				/>
				<input
					name="direction"
					type="text"
					onChange={ handleChange }
					value={form.direction}
				/>
				<input
					name="card_id"
					type="text"
					onChange={ handleChange }
					value={form.card_id}
				/>
			<button onClick={() => console.log(form)}>
				+++
			</button>
		</div>
	);
};

export default FormAddEmployees;