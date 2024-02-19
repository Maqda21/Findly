import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  //res.send('Hello, TypeScript Worldk!');

  const htmlResponse = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Website</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
          }
          header {
              background-color: #f9c1fe;
              color: #6a006c;
              padding: 10px 20px;
          }
          nav ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
          }
          nav ul li {
              display: inline;
              margin-right: 10px;
          }
          nav ul li a {
              color: #a55cb9;
              text-decoration: none;
          }
          section {
              padding: 20px;
          }
          footer {
              background-color: #f1b8ff;
              color: #350052;
              text-align: center;
              padding: 10px 0;
              position: fixed;
              bottom: 0;
              width: 100%;
          }
      </style>
  </head>
  <body>
  
  <header>
      <h1>Welcome to Findly</h1>
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
  </header>
  
  <section>
      <h2>About Us</h2>
      <p>Welcome to Findly, where our mission is to assist you in discovering the perfect movie to match your mood! </p>
  </section>
  
  <footer>
      <p>&copy; 2024 My Website. All Rights Reserved.</p>
  </footer>
  
  </body>
  </html>
  `;

  res.send(htmlResponse);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
