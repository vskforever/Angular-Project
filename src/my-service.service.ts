import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Mock API URL

  constructor(private http: HttpClient) {}

  // Function to fetch data from API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Server returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something went wrong; please try again later.');
  }
}
