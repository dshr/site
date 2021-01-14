module.exports = (ctx) => ({
    map: ctx.options.map,
    parser: 'sugarss',
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('cssnano')
    ]
})
