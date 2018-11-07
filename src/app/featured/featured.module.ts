import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardtypeComponent} from './cardtype/cardtype.component';
import {TelcoComponent} from './telco/telco.component';
import {AggregatorComponent} from './aggregator/aggregator.component';
import {BankComponent} from './bank/bank.component';
import {InstitutionComponent} from './institution/institution.component';
import {IndexComponent} from './index/index.component';
import {RouterModule} from '@angular/router';
import {FEATURED_ROUTES} from './featured.routing';
import {LayoutsModule} from '../layouts/layouts.module';

@NgModule({
    declarations: [
        CardtypeComponent,
        TelcoComponent,
        AggregatorComponent,
        BankComponent,
        InstitutionComponent,
        IndexComponent
    ],
    imports: [
        CommonModule,
        LayoutsModule,
        RouterModule.forChild(FEATURED_ROUTES)
    ],
    exports:[
        RouterModule
    ]
})
export class FeaturedModule {
}
