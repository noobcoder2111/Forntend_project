// src/posts.js
const posts = [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post...',
      date: '2023-07-24',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post...',
      date: '2023-07-25',
    },
    // Add more blog posts here
  ];
  
  export default posts;
  // src/App.js
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import PostList from './PostList';
  import Post from './Post';
  
  function App() {
    return (
      <Router>
        <div className="App">
          <h1>My Blog</h1>
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// src/PostList.js
import React from 'react';
import { Link } from 'react-router-dom';
import posts from './posts';

function PostList() {
  return (
    <div className="post-list">
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
// src/Post.js
import React from 'react';
import { useParams } from 'react-router-dom';
import marked from 'marked';
import posts from './posts';

function Post() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
      <p>Published on: {post.date}</p>
    </div>
  );
}

export default Post;
  