import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {AutocompleteComponent} from './app/autocomplete/autocomplete.component';
import {loggingInterceptorFn} from './app/interceptors/interceptor';

/*
platformBrowserDynamic().bootstrapModule(RxjsAppModule)
  .catch(err => console.error(err));
*/

bootstrapApplication(AutocompleteComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([
        loggingInterceptorFn
      ])
    )
  ]
}).catch(err => console.error(err));
