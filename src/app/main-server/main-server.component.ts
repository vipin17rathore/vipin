import { Component } from '@angular/core';

@Component({
  selector: 'app-main-server',
  templateUrl: './main-server.component.html',
  styleUrls: ['./main-server.component.css']
})

export class MainServerComponent {
  
  serverArray:any = [];
  strName = "vipin";
 // serverArray:{newServerName:'', newServerContent:''};
  
  onServeradded(srvData:{ServerName:string,ServerContent:string}){
      this.serverArray.push({
        newServerName: srvData.ServerName,
        newServerContent: srvData.ServerContent
    });
  }

  }