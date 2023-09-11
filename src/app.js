const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const slackName = req.query.slackName;
  const track = req.query.track;
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString();
  const githubFileUrl = 'https://github.com/BrianKimurgor/back_end_zuri/blob/main/src/app.js';
  const githubRepoUrl = 'https://github.com/BrianKimurgor/back_end_zuri';
  const statusCode = 200;

  const responseData = {
    slack_name: 'Brian Kimurgor',
    current_day: currentDay,
    utc_time: utcTime,
    track: 'backend',
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: statusCode
  };

  const formattedOutput = JSON.stringify(responseData, null, 2);

  res.setHeader('Content-Type', 'application/json');
  res.send(formattedOutput);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});