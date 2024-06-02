import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DopTaskComponent } from './dop-task/dop-task.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DopTaskComponent, Task1Component, Task2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forms';
}
