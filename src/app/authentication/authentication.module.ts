import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {AUTH_ROUTES} from './authentication.routing';
import { ForgotPasswordComponent } from './password/forgot/forgot-password.component';
import { ChangeComponent } from './password/change/change.component';

@NgModule({
    declarations: [LoginComponent, ForgotPasswordComponent, ChangeComponent],
    imports: [
        RouterModule.forChild(AUTH_ROUTES),
        CommonModule
    ]
})
export class AuthenticationModule {
}
