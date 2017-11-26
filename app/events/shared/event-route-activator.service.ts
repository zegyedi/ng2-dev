import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService,private router :Router
    ){

    }
    canActivate(
        route: ActivatedRouteSnapshot
        
    ) {
        var isExistsEvent =!!this.eventService.getEventById(+route.params['id'])
        console.log(isExistsEvent)
        if (!isExistsEvent)
         this.router.navigate(['/404'])
        


        return isExistsEvent
    }
}
