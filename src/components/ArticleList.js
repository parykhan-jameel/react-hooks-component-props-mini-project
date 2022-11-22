import React from 'react';
import Article from './Article';

function ArticleList(props) {
    return (
        <div>
            <main>
                {props.posts.map((post, idx) => (
                    <Article
                        key={idx}
                        title={post.title}
                        date={post.date}
                        preview={post.preview}
                    />
                ))}
            </main>

        </div>
    );
}

export default ArticleList;