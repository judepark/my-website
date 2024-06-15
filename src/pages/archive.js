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

				<div className="archive">
					<h5 className="alphabet">C</h5>
					<a
						href="https://judepark.com/work/chewies"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Chewies</b>
							<br />
							Pet breath mints with nutritional value.
						</p>
					</a>
				</div>


				<div className="archive">
				<h5 className="alphabet">⠀</h5>
					
					<a
						href="https://judepark.com/work/campusminds"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Campus Minds</b>
							<br />
							Research project on mental health.
						</p>
					</a>
				</div>


				<div className="archive">
				<h5 className="alphabet">⠀</h5>
					
					<a
						href="https://judepark.com/work/corevaluescards"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Code for Ethics</b>
							<br />
							Source Code Repository.
						</p>
					</a>
				</div>

		
				<div className="archive">
				<h5 className="alphabet">⠀</h5>
					
					<a
						href="https://judepark.com/work/campusminds"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Core Values Cards</b>
							<br />
							Deck of cards on Core Values.
						</p>
					</a>
				</div>


				<div className="archive">
				<h5 className="alphabet">B</h5>
					
					<a
						href="https://judepark.com/work/bookies"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Bookies</b>
							<br />
							Mobile App for Bibliophiles.
						</p>
					</a>
				</div>


				<div className="archive">
					<h5 className="alphabet">⠀</h5>
					
					<a
						href="https://judepark.com/work/bookofrevelations"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Book of Revelations</b>
							<br />
							A Collection of Essays.
						</p>
					</a>
				</div>


				<div className="archive">
					<h5 className="alphabet">F</h5>
					
					<a
						href="https://judepark.com/work/fairdesign"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Fair Design</b>
							<br />
							Design Framework.
						</p>
					</a>
				</div>

		

				<div className="archive">
					<h5 className="alphabet">H</h5>
					
					<a
						href="https://judepark.com/work/heyjudecomic"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Hey Jude Comics</b>
							<br />
							Webcomic series.
						</p>
					</a>
				</div>



				<div className="archive">
					<h5 className="alphabet">J</h5>
					
					<a
						href="https://judepark.com/work/judejournal"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>JUDE Journal</b>
							<br />
							Magazine layout and design.
						</p>
					</a>
				</div>



				<div className="archive">
					<h5 className="alphabet">K</h5>
					
					<a
						href="https://judepark.com/work/judejournal"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Kafka, Kafka</b>
							<br />
							Animation short.
						</p>
					</a>
				</div>



				<div className="archive">
					<h5 className="alphabet">L</h5>
					
					<a
						href="https://judepark.com/work/lumii"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Lumii</b>
							<br />
							AI career chatbot.
						</p>
					</a>
				</div>



				<div className="archive">
					<h5 className="alphabet">⠀</h5>
					
					<a
						href="https://judepark.com/work/loo"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Loo</b>
							<br />
							Public Toilet Finding App.
						</p>
					</a>
				</div>


				<div className="archive">
					<h5 className="alphabet">M</h5>
					
					<a
						href="https://judepark.com/work/loo"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Mosquitobot</b>
							<br />
							Robotic mosquito prototype.
						</p>
					</a>
				</div>


				<div className="archive">
					<h5 className="alphabet">N</h5>
					
					<a
						href="https://judepark.com/work/nightstand"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Nightstand</b>
							<br />
							Radio show.
						</p>
					</a>
				</div>



				<div className="archive">
					<h5 className="alphabet">R</h5>
					
					<a
						href="https://judepark.com/work/robartskiosk"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Robarts Kiosks</b>
							<br />
							Design project for self-service kiosks.
						</p>
					</a>
				</div>


				<div className="archive">
					<h5 className="alphabet">S</h5>
					
					<a
						href="https://judepark.com/work/robartskiosk"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>Sheep</b>
							<br />
							Novel about a boy with insomnia.
						</p>
					</a>
				</div>


				<div className="archive">
					<h5 className="alphabet">U</h5>
					
					<a
						href="https://judepark.com/work/userpainpointscards"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>User Pain Points Cards</b>
							<br />
							Deck of Cards to identify user pain points.
						</p>
					</a>
				</div>


				<div className="archive">
					<h5 className="alphabet">X</h5>
					
					<a
						href="https://judepark.com/work/xpaper"
						rel="noreferrer noopener"
						onMouseOver={hovereffectover} // Apply hover effect on mouseover
						onMouseOut={hovereffectout}   // Reset style on mouseout
						onFocus={hovereffectout}
						onBlur={hovereffectout}
					>
						<p className="archivetext">
							<b>X Paper</b>
							<br />
							Read X news as a newspaper plugin
						</p>
					</a>
				</div>


		</Layout>
	);
}