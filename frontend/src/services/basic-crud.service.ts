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

  findAllPublic(): Observable<T[]> {
    return this.http.get<T[]>(this.url + '/public');
  }

  findByParentAndPrivacy(id: ID, privacy:string): Observable<T[]> {
    return this.http.get<T[]>(this.url + '/parent/' + id +'/' + privacy);
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

  invite(username:string, id:ID): Observable<T>{
    return this.http.get<T>(this.url + '/invite/' + username + '/' + id);
  }

  findPrive(id:ID): Observable<T[]> {
    return this.http.get<T[]>(this.url + '/prive/' + id);
  }
}
