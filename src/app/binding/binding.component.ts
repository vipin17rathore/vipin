import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  pageTitle:string ="Data Binding in angular";
  imageName:string ="assets/images/images.jpeg";
  constructor() { }

  ngOnInit() {
  }

}
