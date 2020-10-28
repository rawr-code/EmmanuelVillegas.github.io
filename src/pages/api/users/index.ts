import { NextApiRequest, NextApiResponse } from 'next';

import { sampleUserData } from '../../../utils/sample-data';

const handler = async (
	_req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await data.json();
	try {
		if (!Array.isArray(sampleUserData)) {
			throw new Error('Cannot find user data');
		}

		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
};

export default handler;
