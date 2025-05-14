import { API_HOST } from "../Config";

export async function Shorten(url: string) {
	const response = await fetch(API_HOST, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			"EncodedURL": url
		}),
	})

	const json = await response.json();

	return {
		url: response.headers.get('location'),
		...json
	}
}

export async function Lengthen(path: string) {
	const response = await fetch(API_HOST + path);
	return response.json();
}