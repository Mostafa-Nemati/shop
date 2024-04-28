// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
type Data = {
  status: string
}
interface ExtendeNextApiRequest extends NextApiRequest {
  body: {
    token: string
  }
}

export default function handler(
  req: ExtendeNextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("shop_Token", req.body?.token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
      path: '/',
      //domain: '/'
      //secure : ' https'
    })
  )
  res.status(200).json({ status: 'success' })
}
