import React, { useState } from 'react';
import './formPage.scss'
import ChoiceIdentification from "./Choice/ChoiceIdentification";
import FormAddEmployees from "./Form/FormAddEmployees";
import LoadingPhotoEmployees from "./LoadingPhotoEmployees/LoadingPhotoEmployees";

const FormPage = () => {
	const [choiceIdentification, setChoiceIdentification] = useState(false);
	
	return (
		<div className="form-page">
		<ChoiceIdentification
			choiceIdentification={choiceIdentification}
			setChoiceIdentification={setChoiceIdentification}
		/>
			<div className="form-page__container">
				<LoadingPhotoEmployees/>
				<FormAddEmployees/>
			</div>
		</div>
	);
};

export default FormPage;