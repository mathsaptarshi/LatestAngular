import { Component, inject, signal } from '@angular/core';
import { TestService } from '../services/test-service';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {

  private _testService = inject(TestService);
  userList = signal<any[]>([])

  constructor(){
    this._testService.getUserList().subscribe((data:any)=>{
      console.log(data)
      this.userList.set(data.data)
    })
  }
}
