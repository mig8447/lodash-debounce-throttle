// See: https://dev.to/talohana/husky-and-commitlint-for-clean-git-log-44be
module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    rules: {
        // Prevent using any types that alter the version
        'type-enum': [ 2, 'always', [ 'chore' ] ],
        // Next two rules prevent the use of BREAKING CHANGE:
        // Also, the use of ! in the subject is restricted by the husky hook on
        // package.json
        'body-empty': [ 2, 'always' ],
        'footer-empty': [ 2, 'always' ]
    }
};
