import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { EventService } from './event.service';


@Injectable()
export class EventListResolver implements  Resolve<any>{
    constructor(private eventService: EventService)
{

}

    public resolve()
    {
       return this.eventService.getEvents().map(events=>events)

    }
    
}