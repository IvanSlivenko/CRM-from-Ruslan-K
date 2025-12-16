import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from '../shared/services/auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    // RouterOutlet
    CommonModule
  ],
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements  OnDestroy{
  // form: FormGroup
  //
  // constructor() {
  // }
  //
  // ngOnInit(){
  //
  // }

  ngOnDestroy() {
    if(this.aSub) {
      this.aSub.unsubscribe()
    }
  }



  aSub?: Subscription

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(){
    this.route.queryParams.subscribe((params: Params) => {
      if(params['registered']){
        // Тепер ви можете зайти в систему, використовуючи свої данні
      }else if(params['accessDenied']) {
        // Для початку вам потрібно авторизуватись
      }
    })
  }

  form = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null,[
      Validators.required,
      Validators.minLength(6)
    ])
  });

  onSubmit(){
    if(this.form.invalid){
      return
    }
    this.form.disable()

    const user = {
      email: this.form.value.email!,
      password: this.form.value.password!
    }

     this.aSub =  this.auth.login(user).subscribe({
        next: (res) => {
          console.log('Login Success')
          this.router.navigate(['/overveiw'])
        },
        error: (err) => {
          console.warn(err);
          this.form.get('password')?.reset()
          this.form.enable()
        }
      }
    )
  }

}
