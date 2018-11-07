import {Routes} from '@angular/router';
import {CardtypeComponent} from './cardtype/cardtype.component';
import {TelcoComponent} from './telco/telco.component';
import {AggregatorComponent} from './aggregator/aggregator.component';
import {BankComponent} from './bank/bank.component';
import {InstitutionComponent} from './institution/institution.component';
import {IndexComponent} from './index/index.component';

export const FEATURED_ROUTES: Routes = [
    {
        path: '', component: IndexComponent, children: [
        {path: 'telco', component: TelcoComponent},
        {path: 'cardtype', component: CardtypeComponent},
        {path: 'aggregator', component: AggregatorComponent},
        {path: 'bank', component: BankComponent},
        {path: 'institution', component: InstitutionComponent}
    ]
    },
]