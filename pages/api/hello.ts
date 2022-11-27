// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({message: 'You want data!'})
  } else if (req.method === 'POST') {
    console.log(req.headers)
    if (req.body) {
      const username: string | undefined = req.body.username
      const password: string | undefined = req.body.password

      if (username && password) {
        res.status(200).json({message: `${username} --- ${password}`})
      } else res.status(400).json({message: 'No username password provided'})
    } else res.status(400).json({message: 'No data'})
  } else if (req.method === 'PUT') {
    res.status(200).json({message: 'You are going to update the data!'})
  } else if (req.method === 'DELETE') {
  res.status(200).json({ message: 'Warning you are deleting secret info!' })
  } else {
    res.status(400).json({message: 'Method Not Allowed!'})
  }
}