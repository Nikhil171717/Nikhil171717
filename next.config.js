/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true,
        serverComponentsExternalPackages:["mongoose"],
    },
    images:{
        domains:['avatars.githubusercontent.com','localhost'],
    },
    webpack(config){
        config.experiments={
            ...config.experiments,
            topLevelAwait:true,
        }
        return config
    }
}

module.exports = nextConfig
