import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
<<<<<<< HEAD:LatestAngularApp/src/app/footer/footer.spec.ts
import { provideZonelessChangeDetection } from '@angular/core';
=======
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/footer/footer.spec.ts

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:LatestAngularApp/src/app/footer/footer.spec.ts
      imports: [Footer],
      providers: [provideZonelessChangeDetection()]
=======
      imports: [Footer]
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/footer/footer.spec.ts
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
