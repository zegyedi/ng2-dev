import { RouterModule, Routes } from '@angular/router';


import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponet } from './events/event.details/event-details.component';
import {CreateEventComponent} from './events/create/create-event.component'

const routes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponet },
    { path: '**', pathMatch:'full', redirectTo: '/events' }
];

export const appRouting = RouterModule.forRoot(routes);
