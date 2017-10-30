import { EventThumbnailComponent } from './events/event.thumbnail.component';
import { EventListComponent } from './events/event-list.component';
import { EventAppComponent } from './event-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
 imports:[BrowserModule],
 declarations:[EventAppComponent,EventListComponent,EventThumbnailComponent],
 bootstrap:[EventAppComponent]

})
export class AppModule{

}