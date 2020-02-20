
import { TaskService } from 'src/app/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskservice: TaskService, private route: ActivatedRoute ,private router: Router) { }

  obj: List;
  ngOnInit(): void {
    this.obj = new List()
    this.route.params.subscribe((param: Params)=>{
      this.obj.user = param.userId
      this.obj.title = ''
    })
  }

  createList(){
    console.log(this.obj)
    this.taskservice.createList(this.obj,'listcreate/').subscribe((res)=>{
      console.log(res)
      this.router.navigate(['list/'+res.id])
    })
  }

}
