import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
    formLogin: FormGroup = new FormGroup({});
  loginError:boolean=false;
  constructor(private authService: AuthService,private route:Router) {}
  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

   
  sendLogin() {
   
    const user = this.formLogin.value;
  
    this.authService.login(user).subscribe((response) => {
     
      if(response!=null){
        this.loginError=false;
        this.route.navigate(['/',''])
      }else{
        this.loginError=true;
      }
    });
  }
  async logginGoogle(){
    //this.authService.GoogleAuth();
  }
}
