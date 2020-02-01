import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  //template:`<div>child {{ uname }}</div>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  uname:string;
  
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  passedData(){
    this.notify.emit("data is coming from child comp");
  }
  constructor() { }

  ngOnInit() {
  }

}
