import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",pathMatch:"full",redirectTo:"home",
  },
  {
    path:"home",
    loadComponent:()=>import('./home/home').then(m=>m.Home),
  },
  {
    path:"profile",
    loadComponent:()=>import('./profile/profile').then(m=>m.Profile),
  },
  {
    path:"subscribers",
    loadComponent:()=>import('./subscribers/subscribers').then(m=>m.Subscribers),
  }
];
