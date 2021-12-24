require('express-group-routes');

export default app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Codebase API!',
    })
  );

  app.get('/healthz', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the User API!',
    })
  );
};
