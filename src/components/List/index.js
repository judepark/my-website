import React, { useState } from 'react';
import { Link } from 'gatsby';

import * as style from './list.module.css';

export default function List({ listItems = [] }) {
    const [selectedStack, setSelectedStack] = useState('All');

    const displayStacks = ['All', 'Government Projects', 'Other'];

    const filteredListItems = selectedStack === 'All'
        ? listItems
        : listItems.filter(item => item.frontmatter.stack.includes(selectedStack));

    return (
        <div className={style.listContainer}>
            <p><div className={style.tagstacks}>
                {displayStacks.map(stack => (
                    <button
                        key={stack}
                        className={selectedStack === stack ? style.activeStack : style.stack}
                        onClick={() => setSelectedStack(stack)}
                    >
                        {stack}
                    </button>
                ))}
            </div></p>
            <div className={style.list}>
                {filteredListItems.map((item) => (
                    <Link
                        className={style.listItem}
                        key={item.id}
                        to={item.frontmatter.slug}
                    >
                        <p>
                            <b style={{ color: 'hsla(0, 0%, 0%, 0.80)' }}>{item.frontmatter.title}</b>
                            <br />
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
