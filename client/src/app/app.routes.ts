import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';

export const routes: Routes = [
  // { path: 'login', component: LoginPageComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' }
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'login', component: LoginPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, children: [

    ]
  }

];
