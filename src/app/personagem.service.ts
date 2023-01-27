import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personagem } from './shared/Personagem';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const baseurl =
  'https://java-rickandmorty-backend-production.up.railway.app/api/personagens';

@Injectable({
  providedIn: 'root',
})
export class PersonagemService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPersonagens(): Observable<Personagem> {
    return this.http
      .get<Personagem>(baseurl)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getPersonagensFiltro(name: any): Observable<Personagem> {
    return this.http
      .get<Personagem>(`${baseurl}/${name}`)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
