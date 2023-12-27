const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailus.io',
            },
        ],
    },
};

module.exports = nextConfig;
