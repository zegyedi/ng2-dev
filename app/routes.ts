import { LoadChildren, RouterModule, Routes } from '@angular/router';


import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponet } from './events/event.details/event-details.component';
import {CreateEventComponent} from './events/create/create-event.component'
import { Error404Component } from './common/error/error.component';
import { EventRouteActivator } from './events/shared/event-route-activator.service';

const routes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeatctivateCreateEvent'] },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponet,canActivate:[EventRouteActivator] },
    {path:'404',component:Error404Component},
    { path: '*', pathMatch:'full', redirectTo: '/events' },
    {path:'user', loadChildren:'app/user/user.module#UserModule' },
    
];

export const appRouting = RouterModule.forRoot(routes);
