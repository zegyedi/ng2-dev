import { Injectable } from '@angular/core';

declare let toastr:any

Injectable()
export class ToastrService
{

    constructor()
    {}

   goodMessage(message:string,title?:string)
   {
      toastr.success(message,title)
   }



}