import { Injectable } from '@angular/core';
import { Course } from './course.model';


@Injectable({providedIn:'root'})
export class CoursesService{
    courses:Course[]=[
        new Course(
          'C1','course1', 'a short course description', 'long description', 'harsha', 'https://c4.wallpaperflare.com/wallpaper/223/384/898/code-web-development-javascript-computer-screen-pixels-programming-php-syntax-highlighting-programming-language-html-wallpaper-preview.jpg', 'web development', 5, 1.5, 4.5, 0
          ),
        new Course(
           'C2','course2', 'a short course2 description', 'long description2', 'harsha', 'https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg', 'web development', 15, 7, 4.0, 0
          )
      ];
    
      getCourses(){
          return this.courses.slice();
      }

      getCourse(id:number){
        return this.courses[id];
    }
}