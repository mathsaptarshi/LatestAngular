import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private _http = inject(HttpClient)
  getUserList(){
    return this._http.get('json/userList.json')
  }
}
