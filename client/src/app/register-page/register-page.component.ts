import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit, OnDestroy{

  form = new FormGroup({
    email: new FormControl<string | null>(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string | null>(null,[
      Validators.required,
      Validators.minLength(6)
    ])
  });

  aSub?: Subscription

  constructor(
    private auth: AuthService,
    private router: Router
    ) {
  }

  ngOnInit() {

  }

  ngOnDestroy(){
  if(this.aSub) {
    this.aSub.unsubscribe()
  }
  }
  onSubmit(){
    if(this.form.invalid){
      return
    }

    const user = {
      email: this.form.value.email!,
      password: this.form.value.password!
    }

    this.form.disable()

    this.aSub = this.auth.register(user).subscribe({
    next: () => {
      this.router.navigate(['/login'], {
        queryParams: { registered: true }
      })
    }
  ,
    error: (err) => {
      console.warn(err);
      this.form.get('password')?.reset()
      this.form.enable()
    }
  })

  }

}
