import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent  {

  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public author: string;
  @Input() public description: string;

  public getCurrency(): string {
    return 'INR';
  }

}
