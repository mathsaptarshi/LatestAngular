import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { SubscriberService } from '../services/subscriber';
import { Subscribers } from './subscribers';

describe('Subscribers', () => {
  let component: Subscribers;
  let fixture: ComponentFixture<Subscribers>;
  let subscriberServiceSpy: jasmine.SpyObj<SubscriberService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SubscriberService', ['getSubscribers']);

    await TestBed.configureTestingModule({
      imports: [Subscribers],
      providers: [provideZonelessChangeDetection()]
    })
    .overrideComponent(Subscribers, {
      set: {
        providers: [{ provide: SubscriberService, useValue: spy }]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscribers);
    component = fixture.componentInstance;
    subscriberServiceSpy = fixture.debugElement.injector.get(SubscriberService) as jasmine.SpyObj<SubscriberService>;
    subscriberServiceSpy.getSubscribers.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSubscribers and log data', () => {
    const mockData = [{ id: 1, firstname: 'Test User' }];
    subscriberServiceSpy.getSubscribers.and.returnValue(of(mockData));
    spyOn(console, 'log');

    component.getSubscribers();

    expect(subscriberServiceSpy.getSubscribers).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(mockData);
  });
});
