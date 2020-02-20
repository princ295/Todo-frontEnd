import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  list: any;
  task: any;
  constructor(private taskService: TaskService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      console.log(param)
      this.taskService.getTasks(param.listId).subscribe((task :any)=>{
        this.task = task.todos
      })
    })

    this.taskService.getList().subscribe((list: any)=>{
      console.log(list)
      this.task = list[0].todos
      console.log(this.task)
      localStorage.setItem('_xyZI', list[0].id)
      this.list = list

    })
  }

  // createNewList(){
  //   this.taskService.createList('').subscribe(res=>{
  //     console.log(res)
  //   });
  // }

  taskCreate(){
    this.route.params.subscribe((param: Params)=>{
      console.log(param)
      this.router.navigate(['new-task/',param.listId])
    })
  }

  createList(){
    let id = localStorage.getItem('_xyZI')
    this.router.navigate(['/new-list', id ])
  }
}
