import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationConfig, bootstrapApplication } from '@angular/platform-browser';
import { PipesArrayComponent } from './app/pipes-exercice/pipes-array.component';
import { VideoPlayerComponent } from './app/video-player/video-player.component';
import { AppModule } from './app/demo-project/app.module';
import { AppComponent } from './app/demo-project/app.component';
import { FolderComponent } from './app/folder-component/folder.component';
import { TreeComponent } from './app/folder-component/tree.component';
import { DependencyInjectionModule } from './app/dependency-injection/dependency-injection.module';
import { HostComponent } from './app/host/host.component';
import { ViewQueryComponent } from './app/view-query/view-query.component';
import { MyAsyncComponent } from './app/rxjs/my-async.component';
import { provideHttpClient } from '@angular/common/http';
import { AutocompleteComponent } from './app/autocomplete/autocomplete.component';
import { RxjsOperateursComponent } from './app/rxjs-operateurs/rxjs-operateurs.component';

/*
platformBrowserDynamic().bootstrapModule(DependencyInjectionModule)
  .catch(err => console.error(err));
*/
bootstrapApplication(AutocompleteComponent, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));
