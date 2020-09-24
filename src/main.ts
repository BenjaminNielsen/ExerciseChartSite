import {enableProdMode} from '@angular/core'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './app/app.module'
import {environment} from './environments/environment'

import Amplify from 'aws-amplify'
// TODO The code above imports the entire Amplify library.
// You can use separate imports like import Auth from '@aws-amplify/auth' to reduce the final bundle size

import {Auth, API, PubSub, Storage} from 'aws-amplify'

// const awsExports = require('./aws-exports').default

Amplify.configure({
  aws_project_region: 'us-east-2',
  aws_appsync_graphqlEndpoint: 'https://fl56rby2jrbv7a6pd52stzpd44.appsync-api.us-east-2.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-2',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-hn6gsvoqzzfj5gugnt5f4s2uhm'
})

Amplify.register(Auth)
Amplify.register(API)
Amplify.register(PubSub)
Amplify.register(Storage)
// TODO CHeck my issue for a fix


if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
