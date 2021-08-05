import { useState, useEffect } from 'react';
import { questions } from '../questions';
import Question from './Question';
import ReactHtmlParser from 'react-html-parser';

const disabledStyle = {
	pointerEvents: 'none',
	opacity: '.3',
};

const curQuestionStyle = {
	backgroundColor: '#000',
	color: '#fff',
};

const Quiz = () => {
	const [answers, setAnswers] = useState();
	const [curQuestionNum, setCurQuestionNum] = useState(1);
	const [answeredQues, setAnsweredQues] = useState([]);
	const [rejectedQuestions, setRejectedQuestions] = useState([]);
	const [showResults, setShowResults] = useState(false);

	const RESULTS_PAGE = 0;
	const QUIZ_SUCCESS = `Great news! We have the perfect treatment for your
							hair loss. Proceed to <a href='https://manual.co/'> www.manual.co </a>, and prepare to 
							say hello to your new hair!`;

	const QUIZ_FAILURE = `Unfortunately, we are unable to prescribe this medication for you. This
						is because finasteride can alter the PSA levels, which maybe used to monitor for cancer.
						You should discuss this further with your GP or specialist if you would still like this
						medication.`;

	const handleRejection = (option, itemNum) => {
		if (option.isRejection) {
			// if question number is already present, return
			if (rejectedQuestions.includes(itemNum)) return;
			// add rejected question number to array
			else {
				setRejectedQuestions(prev => [...prev, itemNum]);
			}
		} else if (!option.isRejection) {
			/**
			 * Check if question number is in array, if yes
			 * that means the user previously selected a rejected
			 * answer so remove the question number
			 */
			if (rejectedQuestions.includes(itemNum)) {
				const indx = rejectedQuestions.findIndex(i => i === itemNum);
				rejectedQuestions.splice(indx, 1);
			}
		}
	};

	const updateQuestionNum = val => {
		// if at last question, show result after
		if (curQuestionNum === questions.length) {
			setShowResults(true);
			// if results page is not in array add it so user can navigate to it
			if (!answeredQues.includes(RESULTS_PAGE)) {
				setAnsweredQues(prev => [...prev, RESULTS_PAGE]);
			}
			setCurQuestionNum(RESULTS_PAGE);
		}

		setCurQuestionNum(val + 1);
	};

	const updateAnswers = (option, val) => {
		setAnswers(prev => ({ ...prev, [`question-${val}`]: option.value }));
	};

	useEffect(() => {
		// if user has already answered question or if current question is results page
		if (answeredQues.includes(curQuestionNum) || curQuestionNum === RESULTS_PAGE) return;
		setAnsweredQues(prev => [...prev, curQuestionNum]);
	}, [curQuestionNum]);

	useEffect(() => {
		document.body.style = 'height: 100vh;';
	}, []);

	return (
		<section className="quiz">
			<div className="quiz__title-wrapper">
				<h1 className="quiz__title">Manual Quiz</h1>
			</div>
			<p className="quiz__subtitle">Take this quiz to help us find the right product for you.</p>

			<div className="questions">
				<h2 className="header">Questions</h2>
				<ul className="questions__num-list">
					{questions.map((_, i) => {
						const questionNum = i + 1;
						return (
							<>
								<li
									className="num"
									style={
										!answeredQues.includes(questionNum)
											? disabledStyle
											: curQuestionNum === questionNum
											? curQuestionStyle
											: null
									}
									key={i}
									onClick={() => {
										setShowResults('');
										setCurQuestionNum(questionNum);
									}}
								>
									{questionNum}
								</li>
								{i === questions.length - 1 && (
									<li
										style={answeredQues.includes(RESULTS_PAGE) ? curQuestionStyle : disabledStyle}
										className="result"
										key={i + 1}
										onClick={() => {
											// show results page
											setCurQuestionNum(RESULTS_PAGE);
											setShowResults(true);
										}}
									>
										Result
									</li>
								)}
							</>
						);
					})}
				</ul>
				{questions.map((question, i) => {
					return (
						<Question
							handleOnChange={(option, itemNum) => {
								updateQuestionNum(itemNum);
								handleRejection(option, itemNum);
								updateAnswers(option, itemNum);
							}}
							question={question}
							itemNum={i + 1}
							curQuestionNum={curQuestionNum}
							key={i}
						/>
					);
				})}

				{showResults && (
					<p className="result-msg">
						{!rejectedQuestions.length ? <span>{ReactHtmlParser(QUIZ_SUCCESS)}</span> : <span>{QUIZ_FAILURE}</span>}
					</p>
				)}
			</div>
		</section>
	);
};

export default Quiz;
