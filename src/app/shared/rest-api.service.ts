import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../shared/course';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch courses list
  getCourses(): Observable<Course> {
    return this.http
      .get<Course>(this.apiURL + '/courses')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch course
  getCourse(id: any): Observable<Course> {
    return this.http
      .get<Course>(this.apiURL + '/courses/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create course
  createCourse(course: any): Observable<Course> {
    return this.http
      .post<Course>(
        this.apiURL + '/courses',
        JSON.stringify(course),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update course
  updateCourse(id: any, course: any): Observable<Course> {
    return this.http
      .put<Course>(
        this.apiURL + '/courses/' + id,
        JSON.stringify(course),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete course
  deleteCourse(id: any) {
    return this.http
      .delete<Course>(this.apiURL + '/courses/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}