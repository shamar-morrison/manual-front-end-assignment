import logo from '../img/manual-symblol@3x.png';

const Footer = () => {
	return (
		<footer>
			<div className="footer__content container">
				<div className="footer-logo">
					<img src={logo} alt="" className="" />
				</div>
				<div className="footer__content--links">
					<ul className="footer__link-list">
						<li className="list-title">Product</li>
						<li className="list-item">Popular</li>
						<li className="list-item">Trending</li>
						<li className="list-item">Guided</li>
						<li className="list-item">Products</li>
					</ul>
					<ul className="footer__link-list">
						<li className="list-title">Company</li>
						<li className="list-item">Press Release</li>
						<li className="list-item">Mission</li>
						<li className="list-item">Strategy</li>
						<li className="list-item">About</li>
					</ul>
					<ul className="footer__link-list">
						<li className="list-title">Info</li>
						<li className="list-item">support</li>
						<li className="list-item">customer service</li>
						<li className="list-item">get started guide</li>
					</ul>
					<ul className="footer__link-list ">
						<li className="list-title">Follow us</li>
						<ul className="social-links">
							<li className="list-item">
								<i className="fab fa-facebook-f"></i>
							</li>
							<li className="list-item">
								<i className="fab fa-twitter"></i>
							</li>
							<li className="list-item">
								<i className="fab fa-linkedin"></i>
							</li>
						</ul>
					</ul>
				</div>
			</div>
			<div className="copyright">© 2019 Manual. All rights reserved.</div>
		</footer>
	);
};

export default Footer;
