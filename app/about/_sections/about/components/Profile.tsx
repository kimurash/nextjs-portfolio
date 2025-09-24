import ProfileImage from "./ProfileImage";
import ProfileTable from "./ProfileTable";

const Profile = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
				<ProfileImage />
				<ProfileTable />
			</div>
		</div>
	);
};

export default Profile;
