import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

export default function Home({ data }) {
	console.log(data);

	// Function to handle mouseover event
	const hovereffectover = (event) => {
		event.target.style.transform = 'translateY(-5px)';
		event.target.style.transition = 'transform 0.3s ease';
	};
	
	// Function to handle mouseout event
	const hovereffectout = (event) => {
		event.target.style.transform = 'translateY(0)';
		event.target.style.transition = 'none'; // Remove transition on mouseout
	};


	return (
		<Layout>
			<section className={style.header}>
				<div>
					<h1 style={{fontWeight:'800'}}>Jude Park</h1>
					<div><hr/></div>
					<p className={style.header}>
					Welcome to my little corner. 
					</p>
					<p>
					<a
						href="mailto:jude@judepark.com"
						target="_blank"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus = {hovereffectout}
						OnBlur ={hovereffectout}
					>
						<img
							className="social-mail"
							src="/icons8-email.svg" // #323232 250px x 250px https://icons8.com/icon/new-icons/group-filled
							alt="icon-mail"
							style={{ margin: '0 3px 2px -3px', width: '28px', height: '28px' }}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/judepark"
						target="_blank"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus = {hovereffectout}
						OnBlur ={hovereffectout}
					>
						<img
							className="social-icon"
							src="/icons8-linkedin.svg" 
							alt="icon-linkedin"
							style={{ margin: '0 6px 0.1px 6px', width: '28px', height: '28px' }}
						/>
					</a>
					<a
						href="https://github.com/judepark"
						target="_blank"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus = {hovereffectout}
						OnBlur ={hovereffectout}
					>
						<img
							className="social-icon"
							src="/icons8-github.svg"
							alt="icon-github"
							style={{ width: '30px', height: '30px' }}
						/>
					</a>
					</p>
				</div>
			</section>

		</Layout>
	);
}
