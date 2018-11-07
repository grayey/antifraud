import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
    public pageLoading: boolean = true;

    constructor() {
    }

    ngOnInit() {
        this.pageLoading = false;
    }

    public goBack() {
        window.history.back();
    }

}
