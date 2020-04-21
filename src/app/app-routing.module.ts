import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { CoursesComponent } from './courses/courses.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CoursesHomeComponent } from './courses/courses-home/courses-home.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'courses',component:CoursesComponent,children:[
    {path:'',component:CoursesHomeComponent},
    {path:':id',component:CourseDetailComponent},
    {path:':id/edit',component:CourseEditComponent},
  ]},
  {path:'ebooks',component:EbooksComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'auth',component:AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
