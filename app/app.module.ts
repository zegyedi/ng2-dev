import { CreateEventComponent } from './events/create/create-event.component';
import { ToastrService } from './common/toastr.sevice';
import { EventService } from './events/shared/event.service';
import { EventThumbnailComponent } from './events/event.thumbnail.component';
import { EventListComponent } from './events/event-list.component';
import { EventAppComponent } from './event-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponet } from './events/event.details/event-details.component';
import {appRouting} from './routes'
import { EventRouteActivator } from './events/shared/event-route-activator.service';
import { Error404Component } from './common/error/error.component';


@NgModule({
    imports: 
    [BrowserModule,
         appRouting],
 declarations: [
     EventAppComponent,
     NavBarComponent,
     EventListComponent,
     EventThumbnailComponent,
     EventDetailsComponet,
     CreateEventComponent,
    Error404Component],
 bootstrap:[EventAppComponent],
 providers:[EventService,
    ToastrService,
    EventRouteActivator,
    {
        provide:'canDeatctivateCreateEvent',
        useValue:checkDirtySate
    }
]

})
export class AppModule{
}
 function  checkDirtySate(component: CreateEventComponent)
    {
         return  component.isDirty?
         window.confirm('You are sure?') :
         false

    }