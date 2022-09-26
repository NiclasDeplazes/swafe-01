import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'models';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() course: Course | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
