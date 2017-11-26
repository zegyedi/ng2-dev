import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UserRoutingModule } from './user.route';

@NgModule({
    declarations: [ProfileComponent],
    imports: [ CommonModule,UserRoutingModule ],
    exports: [],
    providers: [],
})
export class UserModule {}