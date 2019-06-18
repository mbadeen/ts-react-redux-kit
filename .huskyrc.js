module.exports = {
  hooks: {
    'pre-commit': 'yarn lint',
    'post-checkout': 'yarn install',
    'post-merge': 'yarn install',
    'post-rewrite': 'yarn install'
  }
};
