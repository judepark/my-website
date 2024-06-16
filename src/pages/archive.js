import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

export default function Archive({ data }) {
	console.log(data);

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
				<a href="https://judepark.com/work/chewies" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Chewies</b>
						<br />
						Small business for pet dental treats.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">⠀</h5>
				<a href="https://judepark.com/work/campusminds" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Campus Minds</b>
						<br />
						Research project on mental health.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">⠀</h5>
				<a href="https://judepark.com/work/corevaluescards" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Code for Ethics</b>
						<br />
						Repo for ethical AI.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">⠀</h5>
				<a href="https://judepark.com/work/campusminds" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Core Values Cards</b>
						<br />
						Cue cards on core values.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">B</h5>
				<a href="https://judepark.com/work/bookies" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Bookies</b>
						<br />
						Dating app for bibliophiles.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">⠀</h5>
				<a href="https://judepark.com/work/bookofrevelations" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Book of Revelations</b>
						<br />
						A collection of essays.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">F</h5>
				<a href="https://judepark.com/work/fairdesign" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Fair Design</b>
						<br />
						Design framework.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">H</h5>
				<a href="https://judepark.com/work/heyjudecomic" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Hey Jude Comics</b>
						<br />
						Webcomic series.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">J</h5>
				<a href="https://judepark.com/work/judejournal" rel="noreferrer noopener">
					<p className="archivetext">
						<b>JUDE Journal</b>
						<br />
						Magazine layout and design.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">K</h5>
				<a href="https://judepark.com/work/judejournal" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Kafka, Kafka</b>
						<br />
						Animation short.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">L</h5>
				<a href="https://judepark.com/work/lumii" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Lumii</b>
						<br />
						AI career chatbot.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">⠀</h5>
				<a href="https://judepark.com/work/loo" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Loo</b>
						<br />
						Toilet finding app.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">M</h5>
				<a href="https://judepark.com/work/loo" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Mosquitobot</b>
						<br />
						Prototype for a robotic mosquito.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">N</h5>
				<a href="https://judepark.com/work/nightstand" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Nightstand</b>
						<br />
						Radio show.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">R</h5>
				<a href="https://judepark.com/work/robartskiosk" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Robarts Kiosks</b>
						<br />
						Design project for self-service kiosks.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">S</h5>
				<a href="https://judepark.com/work/robartskiosk" rel="noreferrer noopener">
					<p className="archivetext">
						<b>Sheep</b>
						<br />
						Novel about a boy with insomnia.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">U</h5>
				<a href="https://judepark.com/work/uxpainpointscards" rel="noreferrer noopener">
					<p className="archivetext">
						<b>UX Pain Points Cards</b>
						<br />
						Workplace cue cards on UX pain points.
					</p>
				</a>
			</div>

			<div className="archive">
				<h5 className="alphabet">X</h5>
				<a href="https://judepark.com/work/xpaper" rel="noreferrer noopener">
					<p className="archivetext">
						<b>X Paper</b>
						<br />
						Web plugin to read X news with a newspaper display.
					</p>
				</a>
			</div>

		</Layout>
	);
}
