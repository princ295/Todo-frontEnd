import { TaskViewComponent } from './page/task-view/task-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewListComponent } from './page/new-list/new-list.component';
import { NewTaskComponent } from './page/new-task/new-task.component';


const routes: Routes = [
  {
    path:'', redirectTo:'list', pathMatch:'full'
  },
  {
    path:'new-list/:userId', component: NewListComponent
  },
  {
    path:'new-task', component: NewTaskComponent
  },
  {
    path:'new-task/:listId', component: NewTaskComponent
  },
  {
    path: 'list', component: TaskViewComponent
  },
  {
    path: 'list/:listId', component: TaskViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
