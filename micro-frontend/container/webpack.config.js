const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode:'development',
    devServer:{
        port:3003
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                product:'product@http://localhost:3001/remoteEntry.js'
            }
        })
    ]
}
