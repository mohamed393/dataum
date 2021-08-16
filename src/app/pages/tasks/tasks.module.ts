import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgApexchartsModule} from 'ng-apexcharts';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {DndModule} from 'ngx-drag-drop';
import {
  NgbDropdownModule,
  NgbDatepickerModule,
  NgbDateAdapter,
  NgbDateNativeUTCAdapter,
  NgbDatepickerI18n, NgbDatepickerI18nHebrew
} from '@ng-bootstrap/ng-bootstrap';

import {TasksRoutingModule} from './tasks-routing.module';
import {UIModule} from '../../shared/ui/ui.module';

import {ListComponent} from './list/list.component';
import {KanbanboardComponent} from './kanbanboard/kanbanboard.component';
import {CreatetaskComponent} from './createtask/createtask.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListComponent, KanbanboardComponent, CreatetaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    UIModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    CKEditorModule,
    DndModule,
    NgbDropdownModule,
    TranslateModule
  ],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter}]

})
export class TasksModule {
}
