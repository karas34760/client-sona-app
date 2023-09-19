/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    i18n,
    /*     images: {
            dangerouslyAllowSVG: true,
            contentDispositionType: 'attachment',
            contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        }, */
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
