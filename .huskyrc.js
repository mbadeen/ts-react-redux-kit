const tasks = hooksArray => hooksArray.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['yarn lint --fix', 'yarn csslint']),
    'post-checkout': 'yarn install',
    'post-merge': 'yarn install',
    'post-rewrite': 'yarn install'
  }
}
