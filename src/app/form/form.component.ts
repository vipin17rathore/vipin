import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormServiceService } from '../service/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formservice : FormServiceService) { }

  ngOnInit() {
  }

  topics=['Angular','React','Java']

  userModel = new User("vipin",'a@bofa.com',1234,'React','morning',true);

  onSubmit(){
   console.log(this.userModel)
   this.formservice.formData(this.userModel)
   .subscribe(
     data=> console.log('Success!',data), 
     error=> console.log('Error!',error)
     )
  }
}