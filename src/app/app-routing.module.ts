import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [{
  path:'',
  component: RegisterComponent,
},
{
  path:'dashboard',
  component:DashboardComponent,
  children:[
    {
      path:'',
      component:NotesComponent,
    },
    {
      path:'addnotes',
      component:AddnotesComponent,
    },
    {
      path:'todo',
      component:TodoComponent,
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
