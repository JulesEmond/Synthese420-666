import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicCrud <T, ID> {
  constructor(protected http: HttpClient, protected url: string) {}

  saveClient(t: T): Observable<T> {
    return this.http.post<T>(this.url + '/client', t);
  }

  saveOrganisme(t: T): Observable<T> {
    return this.http.post<T>(this.url + '/organisme', t);
  }

  saveReservation(t: T, id: ID): Observable<T> {
    return this.http.post<T>(this.url + '/reservation/' + id, t);
  }


  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  findById(id: ID): Observable<T> {
    return this.http.get<T>(this.url + '/' + id);
  }

  update(id: ID, t: T): Observable<T> {
    return this.http.put<T>(this.url + '/' + id, t, {});
  }

  deleteById(id: ID): Observable<T> {
    return this.http.delete<T>(this.url + '/' + id);
  }

  login(username:string, password:string) : Observable<T>{
    return this.http.get<T>(this.url + '/' + username + '/' + password);
  }
}
