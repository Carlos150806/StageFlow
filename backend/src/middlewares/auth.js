const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  // O padrão de mercado é: "Bearer TOKEN"
  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, 'SuaChaveSecretaMuitoForte');
    req.userId = decoded.id; // Guarda o ID do aluno para usar na rota
    return next(); // Pode passar!
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
};