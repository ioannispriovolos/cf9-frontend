import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-step8-simple-data-table',
  imports: [],
  templateUrl: './step8-simple-data-table.html',
  styleUrl: './step8-simple-data-table.css',
})
export class Step8SimpleDataTable {
  @Input() data: IPerson[] | undefined;
  @Output() personClicked = new EventEmitter<IPerson>();

  ngOnInit() {
    // this.sortOrder['firstname'] = 'asc';
    // this.data = sortBy(this.data, 'firstname');
    this.sortData('firstname');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.sortData('firstname');
    }
  }

  sortOrder = {
    firstname: 'none',
    lastname: 'none',
    email: 'none'  
  }
  sortData(sortKey: keyof IPerson) {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data, [sortKey]).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, [sortKey]);
    }
  }

  onPersonClicked(data: IPerson) {
    this.personClicked.emit(data);
  }
}
