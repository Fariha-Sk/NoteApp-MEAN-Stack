import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {
  list:any[]= [];
    
    addTask(item:string)
    {
      this.list.push({id:this.list.length,name:item})
      console.warn(this.list);
    }
    removeTask(id:number)
    {
      console.warn(id)
      this.list=this.list.filter(item=>item.id!==id);
    }
   

  constructor() {
 
   }

  ngOnInit(): void {
  }

}
