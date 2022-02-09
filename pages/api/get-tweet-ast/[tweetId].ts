import { NextApiRequest, NextApiResponse } from 'next';
import { fetchTweetAst } from 'static-tweets';

const getTweet = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') {
    return res.status(405).send({ error: 'method not allowed' });
  }

  const tweetId = req.query.tweetId as string;

  if (!tweetId) {
    return res.status(400).send({ error: 'missing required parameter "tweetId"' });
  }
  const tweetAst = await fetchTweetAst(tweetId);
  res.status(200).json(tweetAst);
};

export default getTweet;
