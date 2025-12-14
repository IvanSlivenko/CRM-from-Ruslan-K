// Станом на 14-12-2025 цей код не потрібен
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}
