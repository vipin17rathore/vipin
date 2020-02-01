import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  count:Number=1;

  users:any;

  constructor(private UserService: UserServiceService) { }

  ngOnInit() {
    this.UserService.getAllUsers().subscribe((data)=>{
      this.users = data;
    }
    );
  }
  
}
