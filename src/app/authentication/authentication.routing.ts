import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './password/forgot/forgot-password.component';
import {ErrorPageComponent} from "../error-page/error-page.component";

export const AUTH_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent}

]