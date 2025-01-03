/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"www.gojctraining.com"
            }
        ]
    }
};

export default nextConfig;
