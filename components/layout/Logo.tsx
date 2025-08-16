import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<div className="flex-shrink-0">
			<Link href="/" className="flex items-center space-x-6">
				<div className="relative w-14 h-14 rounded-full overflow-hidden">
					<Image
						src="/image/gundam-uc.jpg"
						alt="ガンダムUC"
						fill
						className="object-cover"
						priority
					/>
				</div>
				<span className="text-2xl font-bold text-gray-900">shunsei</span>
			</Link>
		</div>
	);
};

export default Logo;
