import {koaAdapter as powerAppKoaAdapter} from '@makeflow/power-app-koa';

import {powerApp} from './power-app';

export const powerAppMiddleware = powerApp.middleware(powerAppKoaAdapter, {
  path: '/api/power-app',
});
