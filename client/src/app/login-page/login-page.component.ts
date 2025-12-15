import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    // RouterOutlet
    CommonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  // form: FormGroup
  //
  // constructor() {
  // }
  //
  // ngOnInit(){
  //
  // }

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
  }

}
