import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Article } from './article';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
const apiUrl = '/api/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getArticles(): Observable<T> {
    return this.http.get(apiUrl)
      .pipe(
        tap(article => console.log('fetched articles')),
        catchError(this.handleError('getArticles', [])),
      );
  }

  getArticle(id: number): Observable<T> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched article id=${id}`)),
      catchError(this.handleError(`getArticle id=${id}`)),
    );
  }

  addArticle(article: Article): Observable<T> {
    return this.http.post(apiUrl, article, httpOptions).pipe(
      tap((art: Article) => console.log(`added article w/ id=${art._id}`)),
      catchError(this.handleError('addArticle'))
    );
  }

  updateArticle(id: any, article: Article): Observable<T> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, article, httpOptions).pipe(
      tap(_ => console.log(`updated article id=${id}`)),
      catchError(this.handleError('updateArticle'))
    );
  }

  deleteArticle(id: any): Observable<T> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`deleted article id=${id}`)),
      catchError(this.handleError('deleteArticle'))
    );
  }

}
