It seems like you're trying to set up an Express.js server with authentication using a GitLab Personal Access Token for authentication. Here's how your `index.js` and other related files should look:

### index.js
```javascript
const express = require('express');
const app = express();
const authRouter = require('./routes/auth');

app.use(express.json());
app.use('/api/auth', authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('An error occurred: ', err);
  res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
```

### routes/auth.js
```javascript
const express = require('express');
const router = express.Router();
const { GitlabClient } = require('../gitlab');

// Using the /test endpoint to test authentication with a GitLab token.
router.get('/test', async (req, res) => {
  try {
    const gitlab = new GitlabClient(process.env.GITLAB_TOKEN);
    const issues = await gitlab.getIssues('project_id');
    res.json(issues);
  } catch (error) {
    console.error('An error occurred: ', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
```

### gitlab.js
```javascript
const { GitlabApi } = require('node-gitlab');

class GitlabClient {
  constructor(token) {
    this.gitlab = new GitlabApi({
      token,
    });
  }

  async getIssues(projectId) {
    try {
      const response = await this.gitlab.get(`projects/${projectId}/issues`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports.GitlabClient = GitlabClient;
```

### .env
```makefile
GITLAB_TOKEN=glpat-ocQoFzAZTyYyYyQZ2