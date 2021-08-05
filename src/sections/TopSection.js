import mainHeaderImg from '../img/hair-cat-header@3x.png';
import logo from '../img/manual-symblol@3x.png';

const TopSection = ({ startQuiz }) => {
	return (
		<main className="top__section">
			<div className="container">
				<div className="logo-wrapper">
					<img src={logo} alt="logo" className="logo" />
				</div>
				<div className="top__section--intro">
					<h1 className="main-title">be good to yourself</h1>
					<p className="main-intro">
						We're working around the clock, to bring you a holistic approach to your wellness. From top to bottom, inside and
						out
					</p>
					<div className="quiz-btn-wrapper">
						<button id="start-quiz-btn" onClick={startQuiz}>
							take the quiz
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default TopSection;
