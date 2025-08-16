"use client";

const Footer = () => {
	return (
		<footer className="bg-gray-900">
			<div className="px-8 py-5">
				<div className="mx-auto">
					<div className="flex justify-center items-center">
						<p className="text-gray-200 text-base">
							Copyright © {new Date().getFullYear()} Shunsei Kimura. All rights
							reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
