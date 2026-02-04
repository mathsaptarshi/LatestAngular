import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
<<<<<<< HEAD:LatestAngularApp/src/app/header/header.spec.ts
import { provideZonelessChangeDetection } from '@angular/core';
=======
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/header/header.spec.ts

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:LatestAngularApp/src/app/header/header.spec.ts
      imports: [Header],
      providers: [provideZonelessChangeDetection()]
=======
      imports: [Header]
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/header/header.spec.ts
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
