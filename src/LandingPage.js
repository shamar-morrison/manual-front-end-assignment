import TopSection from './sections/TopSection';
import MiddleSection from './sections/MiddleSection';
import Footer from './sections/Footer';
import Quiz from './sections/Quiz';

import { useState } from 'react';

const LandingPage = () => {
	const [isQuizVisible, setIsQuizVisible] = useState(true);

	if (isQuizVisible) {
		return <Quiz />;
	}
	return (
		<section>
			<TopSection startQuiz={() => setIsQuizVisible(true)} />
			<MiddleSection />
			<Footer />
		</section>
	);
};

export default LandingPage;
