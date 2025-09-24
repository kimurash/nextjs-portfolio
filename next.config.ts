import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skillicons.dev",
				pathname: "/icons/**",
			},
		],
		dangerouslyAllowSVG: true,
	},
};

export default nextConfig;
