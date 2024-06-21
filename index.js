const express = require("express");
const app = express();
const port = 3001;

// Serve static files (if any)
app.use(express.static("public"));

// Dynamic route for sharing results
app.get("/result", (req, res) => {
  const level = req.query.level;
  let imageUrl;

  switch (level) {
    case 1:
      imageUrl = "https://filum-ai.vercel.app/assets/1.png";
      break;
    case 2:
      imageUrl = "https://filum-ai.vercel.app/assets/2.png";
      break;
    case 3:
      imageUrl = "https://filum-ai.vercel.app/assets/3.png";
      break;
    case 4:
      imageUrl = "https://filum-ai.vercel.app/assets/4.png";
      break;
    case 5:
      imageUrl = "https://filum-ai.vercel.app/assets/5.png";
      break;
    default:
      imageUrl = "https://filum-ai.vercel.app/assets/1.png";
  }

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta property="og:title" content="Your Result" />
      <meta property="og:description" content="Check out my result!" />
      <meta property="og:image" content="${imageUrl}" />
      <meta property="og:url" content="https://filum-ai.vercel.app" />
    </head>
    <body>
      <h1>Your Result</h1>
      <p>Share your result on Facebook!</p>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
