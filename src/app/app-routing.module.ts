import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEventComponent } from './add-event/add-event.component';


//const routes: Routes = [];

const routes: Routes = [ 
  {path:"home", component:HomeComponent}, 
  {path:"addevent", component:AddEventComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent,AddEventComponent];