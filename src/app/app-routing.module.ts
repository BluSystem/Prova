import { Servizio1Component } from './page/servizio1/servizio1.component';
import { ChiSiamoComponent } from './page/chi-siamo/chi-siamo.component';
import { Error404Component } from './page/error404/error404.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Servizio2Component } from './page/servizio2/servizio2.component';
import { Servizio3Component } from './page/servizio3/servizio3.component';

const routes: Routes = [
  {'path':'' , component:HomepageComponent},
  {'path': 'chi-siamo', component:ChiSiamoComponent},
  {'path': 'servizio1', component:Servizio1Component},
  {'path': 'servizio2', component:Servizio2Component},
  {'path': 'servizio3', component:Servizio3Component},
  {'path':'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
