import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.css']
})
export class CoursesHomeComponent implements OnInit {
  courses:Course[];
  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.courses=this.coursesService.getCourses();
  }

}
