import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicCrud <T, ID> {
  constructor(protected http: HttpClient, protected url: string) {}

  save(t: T): Observable<T> {
    return this.http.post<T>(this.url, t);
  }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  findById(id: ID): Observable<T> {
    return this.http.get<T>(this.url + '/' + id);
  }

  findByParent(id: ID): Observable<T[]> {
    return this.http.get<T[]>(this.url + '/parent/' + id);
  }

  update(t: T): Observable<T> {
    return this.http.post<T>(this.url + '/update', t);
  }

  deleteById(id: ID): Observable<T> {
    return this.http.delete<T>(this.url + '/delete/' + id);
  }

  login(username:string, password:string) : Observable<T>{
    return this.http.get<T>(this.url + '/' + username + '/' + password);
  }
}
