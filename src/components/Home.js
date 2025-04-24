import React from 'react';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is a React application converted from a Next.js app.</p>
      
      <div className="card">
        <h3>도시별 날씨 정보</h3>
        <p>아래 도시를 클릭하면 해당 도시의 날씨 정보를 확인할 수 있습니다:</p>
        <ul className="weather-links">
          <li>
            <a 
              href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=서울+날씨&oquery=네이버+날씨&tqi=jsFr4lqVN8wssScMt0wssssssth-265100&ackey=w6exshob" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              서울
            </a>
          </li>
          <li>
            <a 
              href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=부산+날씨&oquery=네이버+날씨&tqi=jsFr4lqVN8wssScMt0wssssssth-265100&ackey=w6exshob" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              부산
            </a>
          </li>
          <li>
            <a 
              href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=천안+날씨&oquery=네이버+날씨&tqi=jsFr4lqVN8wssScMt0wssssssth-265100&ackey=w6exshob" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              천안
            </a>
          </li>
          <li>
            <a 
              href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=울산+날씨&oquery=네이버+날씨&tqi=jsFr4lqVN8wssScMt0wssssssth-265100&ackey=w6exshob" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              울산
            </a>
          </li>
          <li>
            <a 
              href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=속초+날씨&oquery=네이버+날씨&tqi=jsFr4lqVN8wssScMt0wssssssth-265100&ackey=w6exshob" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              속초
            </a>
          </li>
        </ul>
      </div>

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