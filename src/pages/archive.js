import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

export default function Archive({ data }) {
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
					<h1>Archive</h1>
					<div><hr/></div>
					<p className={style.header}>
					Things I built.
					</p>
				</div>
			</section>

<br/>
			
			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>C</h5>
					
					<a
						href="https://judepark.com/work/campusminds"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Campus Minds</b>
							<br />
							Research project on mental health.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>⠀</h5>
					
					<a
						href="https://judepark.com/work/codeforethics"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Code for Ethics</b>
							<br />
							Source Code Repository.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>B</h5>
					
					<a
						href="https://judepark.com/work/bookies"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Bookies</b>
							<br />
							Mobile App for Bibliophiles.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>⠀</h5>
					
					<a
						href="https://judepark.com/work/bookofrevelations"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Book of Revelations</b>
							<br />
							A Collection of Essays.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>F</h5>
					
					<a
						href="https://judepark.com/work/fairdesign"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Fair Design</b>
							<br />
							Design Framework.
						</p>
					</a>
				</div>
			</section>
		
			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>H</h5>
					
					<a
						href="https://judepark.com/work/heyjudecomic"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Hey Jude Comics</b>
							<br />
							Webcomic series.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>J</h5>
					
					<a
						href="https://judepark.com/work/judejournal"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>JUDE Journal</b>
							<br />
							Magazine layout and design.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>L</h5>
					
					<a
						href="https://judepark.com/work/lumii"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Lumii</b>
							<br />
							AI career chatbot.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>⠀</h5>
					
					<a
						href="https://judepark.com/work/loo"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Loo</b>
							<br />
							Public Toilet Finding App.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>N</h5>
					
					<a
						href="https://judepark.com/work/nightstand"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Nightstand</b>
							<br />
							Radio show.
						</p>
					</a>
				</div>
			</section>

			<section className={style.header}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h5 style={{ marginRight: '20px', marginBottom: '18px', alignSelf: 'center' }}>R</h5>
					
					<a
						href="https://judepark.com/work/robartskiosk"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p style={{ lineHeight: '1.6em', marginBottom: '0' }}>
							<b>Robarts Kiosks</b>
							<br />
							Design project for self-service kiosks.
						</p>
					</a>
				</div>
			</section>


		</Layout>
	);
}