import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as style from './list.module.css';

export default function List({ listItems = [] }) {
    const [selectedWorkTag, setSelectedWorkTag] = useState('All');
    const [selectedEssayTag, setSelectedEssayTag] = useState('All');

    const workTags = ['All', '🍁 Government Projects', 'Other'];
    const essayTags = ['All', 'Public Service', 'UX', 'Fun'];

    const workPosts = listItems.filter(item => item.frontmatter.type === 'work');
    const essayPosts = listItems.filter(item => item.frontmatter.type === 'essay');

    const filteredWorkPosts = workPosts.filter(item => 
        selectedWorkTag === 'All' || (item.frontmatter.stack && item.frontmatter.stack.includes(selectedWorkTag))
    );

    const filteredEssayPosts = essayPosts.filter(item => 
        selectedEssayTag === 'All' || (item.frontmatter.tags && item.frontmatter.tags.includes(selectedEssayTag))
    );

    return (
        <div className={style.listContainer}>
            {workPosts.length > 0 && (
                <p><div className={style.worktags}>
                    {workTags.map(stack => (
                        <button
                            key={stack}
                            className={selectedWorkTag === stack ? style.activeStack : style.stack}
                            onClick={() => setSelectedWorkTag(stack)}
                        >
                            {stack}
                        </button>
                    ))}
                </div></p>
            )}

            {essayPosts.length > 0 && (
                <p><div className={style.essaytags}>
                    {essayTags.map(tag => (
                        <button
                            key={tag}
                            className={selectedEssayTag === tag ? style.activeTag : style.tag}
                            onClick={() => setSelectedEssayTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div></p>
            )}

            <div className={style.list}>
                {filteredWorkPosts.map((item) => (
                    <Link
                        className={style.listItem}
                        key={item.id}
                        to={item.frontmatter.slug}
                    >
                        <p>
                            <b style={{ color: 'hsla(0, 0%, 0%, 0.80)' }}>{item.frontmatter.title}</b>
                            <br />
                            {item.frontmatter.description && (
                                <span className={style.description} style={{ color: 'hsla(0, 0%, 0%, 0.65)' }}>
                                    {item.frontmatter.description}
                                </span>
                            )}
                        </p>
                    </Link>
                ))}

                {filteredEssayPosts.map((item) => (
                    <Link
                        className={style.listItem}
                        key={item.id}
                        to={item.frontmatter.slug}
                    >
                        <p>
                            <b style={{ color: 'hsla(0, 0%, 0%, 0.80)' }}>{item.frontmatter.title}</b>
                            <br />
                            <h6>
                                <span className={style.date}>
                                    {formatDateString(item.frontmatter.date)}
                                </span>
                            </h6>
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
