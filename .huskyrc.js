module.exports = {
  hooks: {
    'pre-commit': 'eslint --fix --ext ts,tsx,.js && stylelint **/*.css',
    'post-checkout': 'yarn install',
    'post-merge': 'yarn install',
    'post-rewrite': 'yarn install'
  }
};
