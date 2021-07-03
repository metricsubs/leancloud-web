import {PowerApp} from '@makeflow/power-app';

const powerApp = new PowerApp();

powerApp.version('1.0', {
  contributions: {
    powerItems: {
      timeline_step: {
        update({context, inputs}) {
          console.log('point updated', inputs);
        },
      },
    },
  },
});

export {powerApp};
