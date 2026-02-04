import { Component } from '@angular/core';
<<<<<<< HEAD:LatestAngularApp/src/app/header/header.ts
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
=======
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/header/header.ts
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
