import { useStateValue } from "./state";
import Button from "./button";
// import Fade from "./fade";

function getRandomMarker({ focusedMarker, markers }) {
	const filteredMarkers = markers.filter((marker) => {
		return marker.id !== focusedMarker?.id;
	});
	return filteredMarkers[Math.floor(Math.random() * filteredMarkers.length)];
}

export default function Details() {
	const [{ focusedMarker, markers }, dispatch] = useStateValue();
	const randomMarker = getRandomMarker({ focusedMarker, markers });

	return (
		<div className="details">
			<div className="header">
				<Button
					label="Back to globe"
					onClick={() => dispatch({ type: "FOCUS" })}
				/>
				<Button
					label="Random City"
					onClick={() => dispatch({ type: "FOCUS", payload: randomMarker })}
				/>
			</div>
		</div>
	);
}
