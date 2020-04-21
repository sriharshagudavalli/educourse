import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseCategoryComponent } from './courses/course-category/course-category.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesHomeComponent } from './courses/courses-home/courses-home.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    EbooksComponent,
    DashboardComponent,
    AuthenticationComponent,
    HeaderComponent,
    FooterComponent,
    CourseItemComponent,
    CourseEditComponent,
    CourseDetailComponent,
    CourseCategoryComponent,
    LoadingSpinnerComponent,
    HomepageComponent,
    CoursesHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
