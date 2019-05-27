const path = require('path');
const MiniCss = require("mini-css-extract-plugin");
module.exports = {
    entry: './index.js',
    output: {
        filename:'app.js',
        path:path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[{
                    loader: MiniCss.loader,
                    options:{
                        hmr:process.env.NODE_ENV ==='development'
                    }
                },'css-loader']
            }
        ]
    },
    plugins:[
        new MiniCss({filename:"style.css"})
    ],
    resolve:{
        modules :['node_modules'],
        extensions: ['.js','.json','.jsx','.css']
    }
}