import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

const hiddenStyle = {
	display: 'none',
};

const Question = ({ question, handleOnChange, itemNum, curQuestionNum }) => {
	return (
		<div className="questions__wrapper" data-question={`question-${itemNum}`} style={itemNum !== curQuestionNum ? hiddenStyle : null}>
			<p className="questions__title">{question.question}</p>
			<ul className="questions__answers">
				{question.options.map((option, i) => {
					return (
						<li
							className="answers-item"
							onChange={() => {
								handleOnChange(option, itemNum);
							}}
							key={i}
						>
							<input
								type="radio"
								name={`question-${itemNum}`}
								id={option.value.toString()}
								value={option.value}
								className="radio-btn"
							/>

							<label htmlFor={option.value.toString()}>
								{option.display && ReactHtmlParser(option.display)}
								{option.value}
							</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Question;
