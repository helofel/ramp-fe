// babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current', // If you're running on Node.js
                    browsers: 'last 2 versions', // If you're targeting browsers
                },
            },
        ],
        '@babel/preset-react',
    ],
};
