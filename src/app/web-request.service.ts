
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
//import { List } from './models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) { }

  ROOT_URL='http://127.0.0.1:8000/api/'

  get(uri:string){
    console.log(uri)
    return this.http.get(`${this.ROOT_URL}${uri}`)
  }

  post(uri: string, payload: any){
    console.log(payload)
    return this.http.post(`${this.ROOT_URL}${uri}`,payload)
  }

  patch(uri: string, payload: Object){}

  delete(uri: string, payload: Object){}  
}
