import { NgModule } from '@angular/core';
import { RxjsAppComponent } from './rxjs-app.component';
import { CartComponent } from './components/cart.component';
import { FruitsListComponent } from './components/fruits-list.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RxjsAppComponent,
    FruitsListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [
    RxjsAppComponent
  ]
})
export class RxjsAppModule { }
