import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { CreaterequestComponent } from './createrequest/createrequest.component';
import { MyrequestComponent } from './myrequest/myrequest.component';
import { RejectedrequestComponent } from './rejectedrequest/rejectedrequest.component';
import { TeamrequestComponent } from './teamrequest/teamrequest.component';
// Request Routing
import { RequestRoutingModule } from './request-routing.module';

@NgModule({
  imports: [
    RequestRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
    CreaterequestComponent,
    MyrequestComponent,
    RejectedrequestComponent,
    TeamrequestComponent
  ]
})
export class RequestModule { }
