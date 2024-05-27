import { Link } from 'gatsby';
import React from 'react';

import * as style from './navbar.module.css';

export default function Navbar() {
	return (
		<nav className={style.navbar}>
			<div className="links">
				<h5>
				<Link to="/"><img src={'/logo.svg'} alt="Logo" /></Link>
				{/* <Link to="/about">About</Link> */}
				<Link to="/work">WORK</Link>
				<Link to="/essay">ESSAYS</Link>
				<Link to="/about">ABOUT</Link>
				</h5>
			</div>
		</nav>
	);
}
