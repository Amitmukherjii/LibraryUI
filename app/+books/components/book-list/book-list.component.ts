import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Books, BookFilter} from '../../../classes/books';

@Component({
  selector: 'lib-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
 
  @Input() public bookList: Books[] = [];

  public readonly filters: BookFilter[] = [
    <BookFilter>{type: 'Fiction'},
    <BookFilter>{type: 'Non-fiction'}
  ];

public activeFilters: BookFilter[] = [];
  constructor() { }

  ngOnInit() {
  }

  public itemsAfterFilter(): Books[] {
    return this.bookList.filter((item: Books) => {
      const matchesActiveFilter: boolean = this.activeFilters.reduce((prev, curr) => {
        if (item.genres.includes(curr.genres)) {
          return prev && true;
        } else {
          return false;
        }
      }, true);

      return matchesActiveFilter;
    });
    }

  public updateActivatedFilters(filters: BookFilter[]) {
    this.activeFilters = filters;
  }

}
