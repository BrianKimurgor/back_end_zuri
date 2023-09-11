const express = require('express');
   const app = express();

   app.get('/api', (req, res) => {
     const slackName = req.query.slack_name;
     const track = req.query.track;
     const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
     const utcTime = new Date().toISOString();
     const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
     const githubRepoUrl = 'https://github.com/username/repo';
     const statusCode = 200;

     const responseData = {
       slack_name: slackName,
       current_day: currentDay,
       utc_time: utcTime,
       track: track,
       github_file_url: githubFileUrl,
       github_repo_url: githubRepoUrl,
       status_code: statusCode
     };

     res.json(responseData);
   });

   const port = process.env.PORT || 3000;
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });