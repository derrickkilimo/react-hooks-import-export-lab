import React from "react";
import { username, city,} from './src/data/user';

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

console.log(username); // Output: Liza
console.log(city);     // Output: New York

