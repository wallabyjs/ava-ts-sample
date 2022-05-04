module.exports = function (wallaby) {
  return {
    files: [
      'package.json',
      'tsconfig.json',
      'app**/*.ts',
      '!app**/*.spec.ts'
    ],

    tests: [
      'app**/*.spec.ts'
    ],

    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules'
      }
    },

    testFramework: 'ava'
  };
};
