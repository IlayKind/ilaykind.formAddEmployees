import React from 'react';
import './form.scss'
import { useForm } from "react-hook-form";
const FormAddEmployees = () => {
	const {
		register,
		formState: {
		errors,
	},
		reset,
		handleSubmit,
	} = useForm({
		mode: "onBlur"
	})
	
	
	const onSubmit = (data) => {
		console.log(JSON.stringify(data))
		reset();
	}
	return (
		<div className="form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Имя
					<input
						{...register("first_name", {
							required: "Поле обязательно для запонения",
							maxLength: {
								value: 4,
								message: "максимум 4 символа"
							}
						})}
						type="text"
					/>
				</label>
				<div style={{color: "red", "font-size": "0.7rem"}}>
					{errors?.first_name && <p>{errors?.first_name?.message || "Error!"}</p>}
				</div>
				<label>
					Фамилия
					<input
						{...register("last_name", {
							required: "Поле обязательно для запонения"
						})}
						type="text"
					/>
				</label>
				<div style={{color: "red", "font-size": "0.7rem"}}>
					{errors?.last_name && <p>{errors?.last_name?.message || "Error!"}</p>}
				</div>
				<label>
					Отчество
					<input
						{...register("middle_name", {
							required: "Поле обязательно для запонения"
						})}
						type="text"
					/>
				</label>
				<div style={{color: "red", "font-size": "0.7rem"}}>
					{errors?.middle_name && <p>{errors?.middle_name?.message || "Error!"}</p>}
				</div>
				<label>
					Номер карты
					<input
						{...register("card_id", {
							required: "Поле обязательно для запонения",
							minLength: {
								value : 7,
								message: "Минимум 7 символов"
							},
							maxLength: {
								value: 7,
								message: "Максимум 7 символов"
							},
							pattern: {
								value: /[A-Z]/ ,
								message: "Только заглавные буквы"
							}
						})}
						type="text"
					/>
				</label>
				<div style={{color: "red", "font-size": "0.7rem"}}>
					{errors?.card_id && <p>{errors?.card_id?.message || "Error!"}</p>}
				</div>
				<label>
					Должность
					<input
						{...register("direction", {
							required: "Поле обязательно для запонения"
						})}
						type="text"
					/>
				</label>
				<div style={{color: "red", "font-size": "0.7rem"}}>
					{errors?.direction && <p>{errors?.direction?.message || "Error!"}</p>}
				</div>
				<input
				type="submit"
				/>
			</form>
		</div>
	);
};

export default FormAddEmployees;