import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListComponent} from './list/list.component';
import {KanbanboardComponent} from './kanbanboard/kanbanboard.component';
import {CreatetaskComponent} from './createtask/createtask.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'all-tasks',
    component: KanbanboardComponent
  },
  {
    path: 'new',
    component: CreatetaskComponent,
  },
  {
    path: 'edit/:id',
    component: CreatetaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
