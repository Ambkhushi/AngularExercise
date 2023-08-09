import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipeesComponent } from './pipees/pipees.component';
import { BindingComponent } from './binding/binding.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pipees',component:PipeesComponent},
  {path:'binding',component:BindingComponent},
  {path:'animals',component:AnimalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
