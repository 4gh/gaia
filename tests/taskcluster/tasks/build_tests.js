module.exports = {
  task: {
    metadata: {
      name: 'Gaia build tests',
      description: 'Runs entire gaia build system through all known variants.'
    },
    payload: {
      command: ['entrypoint', './bin/ci run build_tests']
    },
    tags: {
      treeherderProject: 'GB'
    }
  }
};
