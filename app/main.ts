import { platformBrowserDynamic} from '@angular/platform-browser-dynamic'

// imports the module we just defined in app.module.ts
import {AppModule} from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule);