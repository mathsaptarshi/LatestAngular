import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD:LatestAngularApp/src/app/app.ts
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
=======
import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/app.ts
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LatestAngular');
}
