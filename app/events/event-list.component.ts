import { ToastrService } from '../common/toastr.sevice';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector:'events-list',
    moduleId:module.id,
    templateUrl:'event-list.component.html'
})

export class EventListComponent implements OnInit
{
    events:any[]
    constructor(private eventService:EventService,private toasterService:ToastrService)
    {
      
    }

    toasterEvent(name)
    {
    try {
    this.toasterService.goodMessage(name,"ddsf")
    } catch (error) {
    console.log(error);
    throw error
    
    }
    }
   
    ngOnInit() {
       this.events = this.eventService.getEvents()
        
    }
}