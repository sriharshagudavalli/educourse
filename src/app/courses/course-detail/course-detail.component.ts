import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course:Course;
  constructor(private coursesService:CoursesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.course=this.coursesService.getCourse(id);
  }

}
