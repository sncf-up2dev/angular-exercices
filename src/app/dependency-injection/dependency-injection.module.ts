import { NgModule } from '@angular/core';
import { ServicesMainComponent } from './components/services-main.component';
import { ServicesFatherComponent, ServicesChildComponent } from './components/services.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ServicesMainComponent,
    ServicesFatherComponent,
    ServicesChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ServicesMainComponent]
})
export class DependencyInjectionModule { }
