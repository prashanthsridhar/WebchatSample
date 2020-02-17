import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bot1Component } from './bot1/bot1.component';
// import { Bot2Component } from './bot2/bot2.component';
// import { Bot3Component } from './bot3/bot3.component';

const routes: Routes = [
  { path: '', redirectTo: "/Bot1", pathMatch: 'full' },
  { path: 'Bot1', component: Bot1Component, pathMatch: "full" },
  // { path: 'Bot2', component: Bot2Component, pathMatch: "full" },
  // { path: 'Bot3', component: Bot3Component, pathMatch: "full" },
  { path: '**', component: Bot1Component, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
