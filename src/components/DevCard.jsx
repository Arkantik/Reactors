export default function DevCard({ firstname, img, linkedIn, github }) {
	const redirectToLinkedIn = () => {
		if (linkedIn) {
			window.location.href = linkedIn;
		}
	};

	const redirectToGitHub = () => {
		if (github) {
			window.location.href = github;
		}
	};

	return (
		<>
			<img
				src={img}
				alt={firstname.toLowerCase()}
				className="h-[224px] w-full object-cover md:h-[280px]"
			/>
			<h2>{firstname}</h2>
			<div className="flex gap-4">
				<button type="button" onClick={redirectToLinkedIn}>
					<img
						src="../assets/icons/linkedIn.svg"
						alt="linkedIn"
						width="32"
						height="32"
					/>
				</button>
				<button type="button" onClick={redirectToGitHub}>
					<img
						src="../assets/icons/github.svg"
						alt="github"
						width="32"
						height="32"
					/>
				</button>
			</div>
		</>
	);
}
