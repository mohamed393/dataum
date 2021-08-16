import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../kanbanboard/kanabn.model';
import { tasks } from '../../tasks/kanbanboard/data'

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss']
})

/**
 * Tasks-create component
 */
export class CreatetaskComponent implements OnInit {

  // bread crumb items
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  task;
  taskForm: FormGroup;
  tasks;
  id;

  ngOnInit() {
    this.taskForm = this.createForm();
    const url = this.route.params.subscribe(params => {
      this.id = params['id']
    });;
    if (this.id) {
      this.task = tasks.filter(el => el.id == this.id);
      this.taskForm.patchValue(this.task[0])
      this.setDetailsForm(); // IF condition  update
    }

  }

  private setDetailsForm() {
    // const userCtrl = this.taskForm.get('tasks') as FormArray;
    for (const val of this.task[0].tasks) {
      this.tasksFormData().push(this.setDetailsFormArray(val));
    }
  }

  private setDetailsFormArray(el?) {
    return this.formBuilder.group({
      taskName: el ? el.taskName : null,
      startDate: el ? el.startDate : null,
      endDate: el ? el.endDate : null,
      priority: el ? el.priority : null
    });
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [this.task ? this.task.id : null],
      dueDate: [this.task ? this.task.dueDate : null],
      eventName: [this.task ? this.task.eventName : null],
      tasks: this.formBuilder.array([])
    });
  }

  tasksFormData() {
    return this.taskForm.get('tasks') as FormArray;
  }


  AddRow() {
    (this.taskForm.get('tasks') as FormArray).push(this.setDetailsFormArray());
  }

  deleteRow(index) {
    (this.taskForm.get('tasks') as FormArray).removeAt(index);
  }
  save() {
    const data = this.taskForm.value;
    console.log('data', data)
  }

}
