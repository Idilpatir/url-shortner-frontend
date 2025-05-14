import { useLocation } from "react-router-dom";

import { Lengthen } from '../api/Shortener'

function Redirect() {
	const { pathname } = useLocation();

	Lengthen(pathname).then(res => {
		if (res) {
			window.location.href = res.encodedURL
		}
	})


	return (
		<div>
			<h1>{pathname}</h1>
		</div>
	)
}

export default Redirect