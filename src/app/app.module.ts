import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {NotificationService} from '../services/notification.service';
import {UserService} from '../services/user.service';
import {ValidationErrorService} from '../services/validation-error.service';
import {EventsService} from '../services/event.service';
import {ScriptLoaderService} from '../services/script-loader.service';
import {ApiHandlerService} from '../services/api-handler.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SharedService} from '../services/api-folder/setup-service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutsModule,
        HttpClientModule
    ],
    providers: [
        NotificationService,
        UserService,
        ValidationErrorService,
        EventsService,
        ScriptLoaderService,
        ApiHandlerService,
        SharedService,
        ApiHandlerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
