import React from 'react';
import './choiceIdentStyle.scss'

const ChoiceIdentification = ({ setChoiceIdentification, choiceIdentification}) => {
	return (
		<div className="choice">
			<div className='choice-container'>
				<button
					className={ choiceIdentification ? "choice-container-btn card_active" : "choice-container-btn card"}
					onClick={() => setChoiceIdentification(true)}
				>
					По карте
				</button>
				<button className={!choiceIdentification ? "choice-container-btn biometry_active" : "choice-container-btn biometry"}
				        onClick={() => setChoiceIdentification(false)}
				>
					По биометрии
				</button>
			</div>
		</div>
	);
};

export default ChoiceIdentification;