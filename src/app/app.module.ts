import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import {NegocioModule} from './negocio/negocio.module';
import { NegocioComponent } from './negocio/negocio.component';

const appRoutes: Routes = [
  {
    path: 'negocio',
    component: NegocioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NegocioComponent
  ],
  imports: [
    BrowserModule,
    // NegocioModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




