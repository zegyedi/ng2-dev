import {  Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
    selector:'create-event',
    templateUrl:'create-event.component.html',
    moduleId:module.id
    
})

export class CreateEventComponent{

constructor(private route:Router) {
   
    
}
    cancel()
    {
        this.route.navigate(['*'])
    }
}