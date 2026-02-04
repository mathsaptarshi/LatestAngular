import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile } from './profile';
<<<<<<< HEAD:LatestAngularApp/src/app/profile/profile.spec.ts
import { provideZonelessChangeDetection } from '@angular/core';
=======
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/profile/profile.spec.ts

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:LatestAngularApp/src/app/profile/profile.spec.ts
      imports: [Profile],
      providers: [provideZonelessChangeDetection()]
=======
      imports: [Profile]
>>>>>>> 5bd34f6fd5296530f7ab97ae57f28e968a3cd719:LatestAngular/src/app/profile/profile.spec.ts
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
