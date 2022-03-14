import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiURL = environment.api;

  constructor( private _http: HttpClient) { }

  getRestoList():Observable<any>{
    return this._http.get(this.apiURL).pipe(
      catchError(this.errorHandler)
    );
  }

  addResto(data:any):Observable<any>{
    return this._http.post(this.apiURL, data).pipe(
      catchError(this.errorHandler)
    );
  }

  deleteResto(id:any):Observable<any>{
    return this._http.delete(`${this.apiURL}/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }

  getCurrentData(id:any):Observable<any>{
    return this._http.get(`${this.apiURL}/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }

  updateCurrentData(id:any,data:any):Observable<any>{
    return this._http.put(`${this.apiURL}/${id}`, data).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}



