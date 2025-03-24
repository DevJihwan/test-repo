export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the test-repo Next.js App!</h1>
      <p>This is a Next.js 14 application converted from an Express.js app.</p>
      
      <div className="card">
        <h2>API Routes</h2>
        <p>Check out the API routes:</p>
        <ul>
          <li><a href="/api/hello">Basic API route - /api/hello</a></li>
          <li><a href="/api/items">Items API - /api/items</a></li>
        </ul>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 800px;
          margin: 0 auto;
        }

        h1 {
          margin-bottom: 2rem;
        }

        .card {
          margin: 1rem 0;
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          width: 100%;
        }

        ul {
          padding-left: 1.5rem;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
      `}</style>
    </div>
  );
}