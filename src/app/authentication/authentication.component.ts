import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isLoginMode=true;
  isLoading=false;
  error:string=null;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email=form.value.email;
    const password=form.value.password;
    let authObs:Observable<AuthResponseData>;
    this.isLoading=true;
    if(this.isLoginMode){
      authObs=this.authService.login(email,password);
    }
    else{
      authObs=this.authService.signUp(email,password)
    }
    authObs.subscribe(
      resData=>{
        //console.log(resData);
        this.isLoading=false;
      },
      errorMessage=>{
        //console.log(errorMessage);
        this.error=errorMessage;
        this.isLoading=false;
      }
    );
    form.reset();
  }

  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }

}
