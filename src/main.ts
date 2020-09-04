import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

import Amplify from '@aws-amplify/core'
import aws_exports from './aws-exports'
// TODO The code above imports the entire Amplify library. You can use separate imports like import Auth from '@aws-amplify/auth' to reduce the final bundle size

Amplify.configure(aws_exports)

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
