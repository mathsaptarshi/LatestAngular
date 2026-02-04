import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  
  private _http = inject(HttpClient)

  submitContactUs(data:any){
    return this._http.post('http://localhost:3000/contact-us-save',data)
  }
}
