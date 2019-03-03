
export type BookGenres = 'Fiction' | 'Non-fiction' ;

export interface Books {
    id?: number;
    name?: string;
    price?: number;
    author?: string;
    description?: string;
    picture?: number;
    genres?: BookGenres[];
    CustomerID?:number;
    Customer_Name?:string;
    Customer_Borrowed_Books?:number;
    Customer_Address?:string;
      }

  export interface BookFilter {
    genres?: BookGenres;
  }

