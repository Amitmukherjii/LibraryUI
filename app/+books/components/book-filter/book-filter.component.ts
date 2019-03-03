import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookGenres, BookFilter} from '../../../classes/books';

@Component({
  selector: 'lib-book-filter',
  templateUrl: 'book-filter.component.html',
  styleUrls: ['book-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFilterComponent {

 
  @Input() availableFilters: BookFilter[] = [];
  @Input() activatedFilters: BookFilter[] = [];
  @Output() activeFilters: EventEmitter<BookFilter[]> = new EventEmitter<BookFilter[]>();

  constructor() {
  }

  ngOnInit() {
  }

  public filterActive(filter: BookFilter): boolean {
    return this.activatedFilters.find(_ => _.genres === filter.genres) != null;
  }

  public changeFilterStatus(filter: BookFilter) {
    this.activeFilters.emit([filter]);
  }
}
