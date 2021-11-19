import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'write', component: WriteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
