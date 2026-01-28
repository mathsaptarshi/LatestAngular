import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home', loadComponent: () => import('./dashboard/dashboard').then((m)=>m.Dashboard) },
  {path:'contact-us', loadComponent: ()=> import('./contact-us/contact-us').then((m)=>m.ContactUs)},
  {path:'profile', loadComponent: ()=> import('./profile/profile').then((m)=>m.Profile)},
  {path:'test', loadComponent: ()=> import('./test/test').then((m)=>m.Test)},
  {path:'**',loadComponent:()=> import('./not-found/not-found').then((m)=>m.NotFound)}
];
