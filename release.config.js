module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        [ '@semantic-release/git', {
            assets: [
                'CHANGELOG.md',
                'package.json',
                'package-lock.json',
                'npm-shrinkwrap.json',
                // TODO: Add assets that need to be committed to the version tag
                // IMPORTANT: Be careful when using globs. This supersedes
                //            .gitignore and will push files even if they're
                //            listed in it
                'dist/lodash-debounce-throttle.min.js'
            ]
        } ],
        [ '@semantic-release/github', {
            assets: []
        } ]
    ],
    preset: 'conventionalcommits',
    // Do not use CI, release will be done manually
    ci: false
};
