import { Component } from '@angular/core';
import { Course } from 'models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: Course[] = [{
    name: 'Advanced Frontend Development',
    code: 'SWAFE-01',
    ects: 5,
  }, {
    name: 'IoT Software Perspective',
    code: 'SWIOT-01',
    ects: 5,
  }, {
    name: 'Machine Learning for Health Care',
    code: 'SWMLHC-01',
    ects: 5,
  }]
}
