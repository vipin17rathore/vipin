import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  userName:string="Micky Virus";

  constructor() { }

  ngOnInit() {
  }

  message:string;

  getData(data){
      this.message = data;
  }
}
