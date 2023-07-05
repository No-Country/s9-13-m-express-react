var jwt = require('jsonwebtoken');
const secretKey = 'SkillSwap';

const tokenGenerate = (email: string, id: string) => {
  const payload = { email, id }
  const token = jwt.sign(payload, secretKey, { expiresIn: '1d' })
  return token;
}

module.exports = tokenGenerate;