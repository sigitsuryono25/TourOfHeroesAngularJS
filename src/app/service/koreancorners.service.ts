import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map} from "rxjs/operators";

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};

@Injectable({
  providedIn: 'root'
})
export class KoreancornersService {
  

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log("An error occurred: " + error.error.message);
    }else{
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      
    }

    return throwError(error);
  }

  private extractData(res: any){
    let body = res;
    return body || {}
  }

  public getData(url: string): Observable<any>{
    return this.http.get(url)
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }
}
