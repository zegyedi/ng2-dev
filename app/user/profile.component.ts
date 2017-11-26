import { Component } from '@angular/core';

@Component({
    template:`
    <h1>Edit your Profile</h1>
    <hr>
    <div class="col-md-6">
    <h3>Edit profile here go</h3>
    <br/>
    <br/>
   <button type="submit" class="btn btn-primary">Save</button>
   <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>

    </div>
    
    `
})
export class ProfileComponent{

    cancel()
    {
        console.log("cancel")
    }
    
}