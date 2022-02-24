import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gestionnaire } from '../models/gestionnaire';
import { BasicCrud } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireService extends BasicCrud<Gestionnaire, Number>{

    constructor(http: HttpClient) { 
      super(http, 'http://localhost:9898/backend/gestionnaire');
    }
  
    public logout(){
      sessionStorage.clear();
    }
}
