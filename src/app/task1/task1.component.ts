import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {
  myForm : FormGroup;
  constructor(){
      this.myForm = new FormGroup({
          "userEmail": new FormControl("", [
                              Validators.required,
                              Validators.email
                          ]),
          "userPassword": new FormControl("", Validators.pattern("^(?=.*[A-Z]).{8,}$"))
      });
  }

  submit(){
      console.log(this.myForm);
  }
}
