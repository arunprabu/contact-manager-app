import { enableProdMode } from '@angular/core';  //default node_modules imports
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';   // custom imports
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Step 2: ng app should be kickstarted with a module
platformBrowserDynamic().bootstrapModule(AppModule)   
  .catch(err => console.error(err));
