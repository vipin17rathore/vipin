import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated  = new EventEmitter<{ServerName:string,ServerContent:string}>();
  newServerName:string;
  newServerContent:string; 
  
  constructor() { }

  ngOnInit() {
  }

  addNewServer(){
      this.serverCreated.emit({
        ServerName:this.newServerName,
        ServerContent:this.newServerContent
      });
  }
}
