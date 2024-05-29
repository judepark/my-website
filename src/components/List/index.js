import React from 'react';
import { Link } from 'gatsby';

import * as style from './list.module.css';

export default function List({ listItems = [] }) {
	return (
		<div className={style.listContainer}>
			<div className={style.list}>
				{listItems.map((item) => (
					<Link
						className={style.listItem}
						key={item.id}
						to={item.frontmatter.slug}
					>

						<p>
							<b>{item.frontmatter.title}</b>
							<br/>
							{item.frontmatter.type === 'work' && (
							<>
							{item.frontmatter.description && (
								<span className={style.description} style={{ color: 'hsla(0, 0%, 0%, 0.65)' }}>
								{item.frontmatter.description}
								</span>
							)}
							</>
							)}
							{item.frontmatter.type === 'essay' && (
								<h6>
								<span className={style.date}>
								{formatDateString(item.frontmatter.date)}
								</span>
								</h6>
							)}
						</p>

					</Link>
				))}
			</div>
		</div>
	);
}

const formatDateString = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' });
};