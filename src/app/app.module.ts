import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { Error404Component } from './page/error404/error404.component';
import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { Servizio1Component } from './page/servizio1/servizio1.component';
import { Servizio2Component } from './page/servizio2/servizio2.component';
import { Servizio3Component } from './page/servizio3/servizio3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    Error404Component,
    ChiSiamoComponent,
    Servizio1Component,
    Servizio2Component,
    Servizio3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
