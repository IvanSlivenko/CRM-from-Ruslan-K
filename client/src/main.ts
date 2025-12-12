import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import 'materialize-css/dist/js/materialize.js'

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
