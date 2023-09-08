const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name || "Alex Omiunu";
  const track = req.query.track || "backend";
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getUTCDate()).padStart(2, "0");
  const hours = String(currentDate.getUTCHours()).padStart(2, "0");
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");
  const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  //   const utcTime = currentDate.toISOString();

  const githubFileUrl =
    "https://github.com/alxzndr2019/hngx-stage1/blob/main/server.js";
  const githubRepoUrl = "https://github.com/alxzndr2019/hngx-stage1";

  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(jsonResponse);
});

const port = process.env.PORT || 9888;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
