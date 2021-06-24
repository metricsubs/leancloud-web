import KoaRouter from '@koa/router';

const router = new KoaRouter();

router.get('/', context => {
  context.body = `
  <html>
    <head>
      <title>MetricSubs Online Service</title>
    </head>
    <body>
      <h1>Congratulations!</h1>
      <h4>MetricSubs Online Service is up and running.</h4>
    </body>
  </html>`;
});

export {router};
