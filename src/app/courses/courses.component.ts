import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:Course[]=[
    new Course(
      'C1','course1', 'a short course description', 'long description', 'harsha', 'https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg', 'web development', 5, 1.5, 4.5, 0
      ),
    new Course(
       'C2','course2', 'a short course2 description', 'long description2', 'harsha', 'https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg', 'web development', 15, 7, 4.0, 0
      )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
