import { useLocation } from "react-router-dom";

function Redirect() {
	const { pathname } = useLocation();

	return (
		<div>
			<h1>{pathname}</h1>
		</div>
	)
}

export default Redirect