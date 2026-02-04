import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiServices } from '../services/api-services';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  private fb = inject(FormBuilder);
  public contactForm:FormGroup;
  private _apiServices = inject(ApiServices);

  constructor(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', []], // Email format validation
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Mobile regex
      subject: ['', []],
      description: ['', []]
    })
  }

  submitForm(){
    console.log(this.contactForm.value);
    this._apiServices.submitContactUs(this.contactForm.value).subscribe((data)=>{
      console.log("data saved")
    },(err)=>{
      console.log("Error:",err)
    })
  }
  
}
