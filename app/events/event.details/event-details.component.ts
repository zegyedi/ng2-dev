import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'event-details',
    templateUrl:"event-details.component.html",
    moduleId:module.id,
    styles:[`
      .container{ padding:0, 20px,0,20px; color:red}
      .event-image{height:100px}
    `]
    

})
export class EventDetailsComponet implements OnInit
{
    event:any
    constructor(private eventService:EventService,private route:ActivatedRoute) {
        
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.event = this.eventService.getEventById(+this.route.snapshot.params['id'])

    }
}