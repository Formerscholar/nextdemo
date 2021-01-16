// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getLoginCode, getLogin } from '../../../services/login'

export default async (req, res) => {
  console.log('====================================');
  console.log(req.query);
  console.log('====================================');
  const { code, msg } = await getLoginCode({
    mobile: '18083795906',
  })
  res.send({ msg });
}
