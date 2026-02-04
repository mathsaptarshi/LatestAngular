import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  private _http = inject(HttpClient);

  getSubscribers() {
    return this._http.get('/json/user-list.json');
  }
}
