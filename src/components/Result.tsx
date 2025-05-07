import 'react';

import { QRCodeCanvas } from 'qrcode.react';
import { FaCopy } from 'react-icons/fa6';

export type ResultProps = {
	url: string
}

function Result({ url }: ResultProps) {
	return (
		<div className="result_wrapper">
			<div className="result_container">
				<div className="result">
					<a className="result_link" href={url}>
						{url}
					</a>
				</div>
				<button className="copy_button">
					<FaCopy />
				</button>
			</div>
			<QRCodeCanvas value={url} size={190} className="qr_canvas"/>
		</div>
	)
}

export default Result