/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const envConfig = require('./.env.json');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    i18n,
    env: {
        ...envConfig[process.env.TARGET_ENV || 'tickifi'],
    },
    images: {
        /*      dangerouslyAllowSVG: true,
             contentDispositionType: 'attachment',
             contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", */
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ipfs.io',
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: {
                loader: '@svgr/webpack',
                options: {
                    svgo: true,

                    svgoConfig: {
                        multipass: true,
                        plugins: [
                            {
                                name: 'prefixIds',
                                params: {
                                    overrides: {
                                        removeViewBox: false,
                                    },
                                },
                            },
                        ],
                    },
                },
            },
        });
        return config;
    },
}

module.exports = nextConfig
