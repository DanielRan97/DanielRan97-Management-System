import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import {WorkSystemComponent } from './work-system/work-system.component';
import { AddComponent } from './add/add.component';
import { EditworkerComponent } from './editworker/editworker.component';


const routes: Routes = [
  {path: '', component : LogInComponent},
  {path: 'log', component : LogInComponent},
  {path: 'log/:name', component: LogInComponent},
  {path: 'work', component : WorkSystemComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditworkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
