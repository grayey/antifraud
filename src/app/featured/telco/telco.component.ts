import {Component, OnInit} from '@angular/core';
import * as UI from '../../../shared/magic-methods/ui';
import {MagicClasses} from '../../../shared/magic-methods/classes';
import {SharedService} from '../../../services/api-folder/setup-service';


@Component({
    selector: 'app-telco',
    templateUrl: './telco.component.html',
    styleUrls: ['./telco.component.css']
})
export class TelcoComponent extends MagicClasses implements OnInit {



    constructor(_telcoService: SharedService) {
        super(_telcoService);
    }

    ngOnInit() {
        UI.run('Banks');
    }


}
