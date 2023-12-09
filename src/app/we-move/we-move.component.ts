import { Component } from '@angular/core';

@Component({
  selector: 'app-we-move',
  templateUrl: './we-move.component.html',
  styleUrls: ['./we-move.component.css']
})
export class WeMoveComponent {

  projectcount:number=18000;
  familycounts:number=100;
  employeecount:number=1000;
  yearcount:number=1;

  projectcountstop:any= setInterval(()=>{
    this.projectcount++;
    if(this.projectcount==18500)
    {
      clearInterval(this.projectcountstop);
    }
  },0)

  familycountsstop:any=setInterval(()=>{
    this.familycounts++;
    if(this.familycounts==1500)
    {
      clearInterval(this.familycountsstop);
    }
  },0)

  employeecountstop:any=setInterval(()=>{
    this.employeecount++;
    if(this.employeecount==2488)
    {
      clearInterval(this.employeecountstop);
    }
  },0)

  yearcountstop:any=setInterval(()=>{
    this.yearcount++;
    if(this.yearcount==49)
    {
      clearInterval(this.yearcountstop);
    }
  },0)
}
