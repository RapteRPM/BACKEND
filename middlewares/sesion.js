export function verificarSesion(req, res, next) {
  if (req.session && req.session.usuario) {
    next();
  } else {
    return res.status(401).json({
      error: 'No autorizado',
      activa: false
    });
  }
}

export function evitarCache(req, res, next) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
}