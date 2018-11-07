import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../components/notification/notification.component";
import { NotificationService } from "../../services/notification.service";
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [],
    providers: [NotificationService]
})
export class NotificationModule { }
