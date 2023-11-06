interface IProps {
	title: string;
	imageFile: string;
	body: string;
}

export const ImageBox = ({title, imageFile, body } : IProps) => {
	return (
		<div className="bg-orange-300 p-4">
			<h2 className="mb-2 text-2xl">{title}</h2>
			<div className="flex gap-4">
				<img src={`images/${imageFile}`} />
				<p>{body}</p>
			</div>
		</div>
	);
};
