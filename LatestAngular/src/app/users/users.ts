import { Component, inject, signal } from '@angular/core';
import { TestService } from '../services/test-service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private _testService = inject(TestService);
  userList = signal<any[]>([])

  constructor(){
    this._testService.getUserList().subscribe((data:any)=>{
      console.log(data)
      this.userList.set(data.data)
    })
  }
}
