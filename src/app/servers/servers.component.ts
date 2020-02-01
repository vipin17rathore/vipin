import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName:string="Linux";
  serverStatus:string;
  serverDetails=['server1','server2','server3','server4','server5','server6'];


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' :'offline';
   }

   getColor(){
     return this.serverStatus === 'online' ? 'green' : 'red' ;
     console.log(this.serverStatus)
   }

  ngOnInit() {
  }

  updateServerName(event:any){
    this.serverName = event.target.value;
  }
}
