import {Injectable} from '@angular/core';
//import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
//import {Http,URLSearchParams,HttpModule} from '@angular/http';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Books} from '../classes/books';
import {Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class BookService {
  //bookList Books[] = {};
   //result Books[]= {Books:[]};
   private bookObservable: Observable<Books[]>;
  readonly rootUrl = 'https://localhost:44361';
  constructor(private http: HttpClient) { }
  params = new HttpParams();
  // public getBooks(): Observable<Books[]> {
  //   return this.books();
  // }
   public getBooks(): Observable<Books[]> {
   this.bookObservable = this.http.get<Books[]>(this.rootUrl + '/api/Library/AllBooks');

    return this.bookObservable;
  }




  public getBook(id: any): Observable<Books> {
   //debugger;
   let url = 'https://localhost:44361/api/Library/Books/Id='+id;
  return this.http.get<Books>(url);
  }

  private books(): Observable<Books[]> {
    return of(<Books[]>[
      <Books>{id: 1, name: 'The Midnight Line', 
        price: 123.09,
        author: 'Child Lee', 
        description:'A Jack Reacher Novel', 
        picture:1, type: ['Fiction']}
      //   ,
      // <Books>{id: 2, name: 'The Rooster Bar', price: 99.09,author: 'John Grisham', description:'A Novel', picture:1, type: ['Fiction']},
      // <Books>{id: 3, name: 'Two Kinds of Truth', price: 99.09,author: 'Connelly, Michael', description:'A Novel', picture:1, type: ['Fiction']},
      // <Books>{id: 4, name: 'Origin', price: 99.09,author: 'Dan Brown', description:'A Novel', picture:1, type: ['Fiction', 'gray']},
      // <Books>{id: 5, name: 'Artemis', price: 99.09,author: 'Weir, Andy', description:'A Novel', picture:1, type: ['Fiction', 'blue']},
      // <Books>{id: 6, name: 'Hardcore Twenty-four', price: 99.09,author: 'Evanovich, Janet', description:'A Novel', picture:1, type: ['Fiction', 'blue']},
      // <Books>{id: 7, name: 'Glass Houses', price: 99.09,author: 'Penny, Louise', description:'A Novel', picture:1, type: ['Fiction']},
      // <Books>{id: 8, name: 'Little Fires Everywhere', price: 99.09,author: 'Ng, Celeste', description:'A Novel', picture:1, type: ['Fiction']},
      // <Books>{id: 9, name: 'The Wendy Project', price: 99.09,author: 'Osborne, Melissa Jane ', description:'Book 2017', picture:1, type: ['Fiction', 'blue', 'green']}
  
      
    ]);
  }
}