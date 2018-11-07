import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';


const routes: Routes = [
    {path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    {path: 'dashboard', loadChildren: './featured/featured.module#FeaturedModule'},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
