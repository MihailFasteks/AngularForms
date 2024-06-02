// Это также задание 3
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup,
  FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component {
  myForm : FormGroup;
  constructor(private formBuilder: FormBuilder){

      this.myForm = formBuilder.group({

          
          "userEmail": ["", [ Validators.required, Validators.email]],
          "userPassword": ["", [ Validators.required, Validators.pattern]],
          "usercheck":[false, Validators.requiredTrue],
          "activities": formBuilder.array([
              [""]
          ])
      });
  }
  getFormsControls() : FormArray{
      return this.myForm.controls["activities"] as FormArray;
  }
  addActivities(){
      (<FormArray>this.myForm.controls["activities"]).push(new FormControl("", Validators.required));
  }
  submit(){
      console.log(this.myForm);
      this.myForm.reset();
  }
}
