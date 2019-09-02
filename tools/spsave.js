const { spsave } = require('spsave');
const { spUrl, spSubUrl, spDir, spUser, spPw } = require('../config');

spsave(
  {
    siteUrl: spUrl + spSubUrl,
  },
  {
    username: spUser,
    password: spPw,
  },
  {
    glob: 'build/**/*',
    base: 'build',
    folder: spDir,
  }
)
  .then(() => {
    console.log(`Saved files to ${spUrl}${spDir}.`);
  })
  .catch(error => {
    console.error(error);
  });
