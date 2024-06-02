import { Component } from '@angular/core';
import { FormsModule, NgForm} from "@angular/forms";
class User{
  constructor(public name: string,
      public email: string,
      public phone: string){}
}
@Component({
  selector: 'app-dop-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dop-task.component.html',
  styleUrl: './dop-task.component.css'
})
export class DopTaskComponent {
email:string="";
password:string="";

onSubmit(form: NgForm){
  console.log(form);

}
}
