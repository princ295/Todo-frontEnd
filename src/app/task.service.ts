
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';
import { List } from './models/list.model';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  getList(){
    return this.webReqService.get('list/')
  }

  createList(title: List,uri:string):Observable<any>{
    console.log(uri)
    // we want to send a web request to create a list 
    return this.webReqService.post(`${uri}`,title)
  }


  createTask(title: Task, uri:string){
    // we want to send a web request to create a task 
    return this.webReqService.post(`${uri}`,title)
  }

  getTasks(Id: number):Observable<any>{
    return this.webReqService.get(`list/${Id}`)
  }
}
