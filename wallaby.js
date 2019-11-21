module.exports = function (wallaby) {
  return {
    files: [
      'app**/*.ts',
      '!app**/*.spec.ts'
    ],

    tests: [
      'app**/*.spec.ts'
    ],

    env: {
      type: 'node'
    },

    testFramework: 'ava'
  };
};
