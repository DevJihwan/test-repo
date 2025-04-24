import React from 'react';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is a React application converted from a Next.js app.</p>
      
      <div className="card">
        <h3>API Routes</h3>
        <p>In a React app, you need to set up a separate backend server for API routes.</p>
        <p>You can use Express.js, Koa, or any other Node.js framework for your backend API.</p>
      </div>

      <div className="card">
        <h3>React Features</h3>
        <ul>
          <li>Component-Based Architecture</li>
          <li>Virtual DOM for Efficient Updates</li>
          <li>Unidirectional Data Flow</li>
          <li>JSX for Template Syntax</li>
          <li>Rich Ecosystem and Community</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;