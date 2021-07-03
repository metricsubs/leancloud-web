import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import AV from 'leanengine';

import {router} from './router';
import {
  LEANCLOUD_APP_ID,
  LEANCLOUD_APP_KEY,
  LEANCLOUD_APP_MASTER_KEY,
  PORT,
} from './utils/env';
import {powerAppMiddleware} from './power-app';

AV.init({
  appId: LEANCLOUD_APP_ID,
  appKey: LEANCLOUD_APP_KEY,
  masterKey: LEANCLOUD_APP_MASTER_KEY,
});

let app = new Koa();

app.use(powerAppMiddleware);

app
  .use(AV.koa() as Koa.Middleware)
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  console.info(`MetricSubs online service is listening on port: ${PORT}...`);
});
