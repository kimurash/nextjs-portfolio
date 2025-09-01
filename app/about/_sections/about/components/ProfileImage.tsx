import Image from "next/image";

const ProfileImage = () => {
	return (
		<div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6">
			<div className="w-64 h-64 lg:w-72 lg:h-72">
				<Image
					src="/image/gundam-uc.jpg"
					alt="プロフィール画像"
					width={288}
					height={288}
					className="w-full h-full object-cover rounded-full border-2 border-gray-200 shadow-sm"
				/>
			</div>
		</div>
	);
};

export default ProfileImage;
