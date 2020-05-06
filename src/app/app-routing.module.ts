import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditEventComponent } from './edit-event/edit-event.component';


const routes: Routes = [ 
  { path:"home", component:HomeComponent}, 
  { path:"editEvent/:id", component:EditEventComponent},
  { path:"editEvent", component:EditEventComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent,EditEventComponent];