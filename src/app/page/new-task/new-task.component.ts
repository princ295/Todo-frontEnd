import { TaskService } from 'src/app/task.service';
import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private taskservice: TaskService) { }

  obj:Task;
  ngOnInit(): void {
    this.obj = new Task()
    this.route.params.subscribe((param: Params)=>{
      this.obj._id = param.listId
      this.obj.title=''
    })
  }

  createTask(){
    console.log(this.obj)
    this.taskservice.createTask(this.obj, 'taskcreate/').subscribe((res)=>{
      console.log(res)
      this.router.navigate(['list',this.obj._id])
    })
  }
}
