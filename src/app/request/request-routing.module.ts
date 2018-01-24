import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaterequestComponent } from './createrequest/createrequest.component';
import { MyrequestComponent } from './myrequest/myrequest.component';
import { RejectedrequestComponent } from './rejectedrequest/rejectedrequest.component';
import { TeamrequestComponent } from './teamrequest/teamrequest.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Request'
    },
    children: [
      {
        path: 'createRequest',
        component: CreaterequestComponent,
        data: {
          title: 'Create Request'
        }
      },
      {
        path: 'myRequest',
        component: MyrequestComponent,
        data: {
          title: 'My Request'
        }
      },
      {
        path: 'rejectedRequest',
        component: RejectedrequestComponent,
        data: {
          title: 'Rejected Request'
        }
      },
      {
        path: 'teamRequest',
        component: TeamrequestComponent,
        data: {
          title: 'Team Request'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule {}
