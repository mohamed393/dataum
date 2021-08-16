import {Component, OnInit} from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';

import {tasks} from './data';

import {Task} from './kanabn.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss']
})

/**
 * Kanbanboard Component
 */
export class KanbanboardComponent implements OnInit {

  personals: any;
  works: any;
  Families: any;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Tasks'}, {label: 'Kanban Board', active: true}];


    this._fetchData();
  }

  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  /**
   * On task drop event
   */
  // onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
  //   console.log('drop');
  //   if (filteredList && event.dropEffect === 'move') {
  //     let index = event.index;
  //
  //     if (typeof index === 'undefined') {
  //       index = filteredList.length;
  //     }
  //
  //     filteredList.splice(index, 0, event.data);
  //   }
  // }

  private _fetchData() {
    // all tasks
    this.works = tasks.filter(t => t.eventName === 'Work');
    this.personals = tasks.filter(t => t.eventName === 'Personal');
    this.Families = tasks.filter(t => t.eventName === 'Family');
    console.log('personals', this.personals);
    console.log('works', this.works);
  }

  routeWithId(id) {
    id ? this.router.navigate(['/tasks/edit/' + id]) : this.router.navigate(['/tasks/new/']);
    console.log('id', id);
  }
}
