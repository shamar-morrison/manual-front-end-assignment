import featureImgOne from '../img/hair-photo-1-2-x@3x.png';
import featureImgTwo from '../img/sex-photo-1-2-x@3x.png';

const MiddleSection = () => {
	return (
		<section className="container">
			<h2 className="section__title">what we can help with</h2>

			<div className="feature">
				<div className="feature--img">
					<img src={featureImgOne} alt="featured image 1" />
				</div>
				<div className="feature--details">
					<h3 className="number">01</h3>
					<div className="details__info">
						<h3 className="details__info--title">hair loss</h3>
						<p className="details__info--subtitle">Hair loss needn't be irreversible. We can help!</p>
						<p className="details__info--msg">
							Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and
							regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair
							loss. And you can keep him at bay. The choice is yours.
						</p>
					</div>
				</div>
			</div>
			<div className="feature feature--two">
				<div className="feature--img">
					<img src={featureImgTwo} alt="featured image 2" />
				</div>
				<div className="feature--details">
					<h3 className="number">02</h3>
					<div className="details__info">
						<h3 className="details__info--title">Erectile Dysfunction</h3>
						<p className="details__info--subtitle">Erections can be a tricky thing. But no need to feel down!</p>
						<p className="details__info--msg">
							There are plenty of reasons why you might be having difficulty in the erection department. We can help you
							figure out possible reasons why. And prescribe a pill if needed.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MiddleSection;
