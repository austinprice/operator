module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.output.publicPath = `${process.cwd()}/dist/`
        }

        rules: [
            // ... other rules omitted

            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}