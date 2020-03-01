import { GITHHUB_USER, GITHUB_REPO } from '../constants';

function getIssues() {
  return fetch(`https://api.github.com/repos/${GITHHUB_USER}/${GITHUB_REPO}/issues?state=open&labels=visible`)
    .then(res => res.json());
}

export default {
  getIssues,
};
