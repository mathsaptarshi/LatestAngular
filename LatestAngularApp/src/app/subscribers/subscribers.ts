import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, ViewContainerRef } from '@angular/core';
import { SubscriberService } from '../services/subscriber';
import { ViewUser } from './view-user';
import { Subject, of } from 'rxjs';
import { concatMap, delay, exhaustMap, mergeMap, switchMap, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-subscribers',
  imports: [CommonModule],
  providers: [SubscriberService],
  templateUrl: './subscribers.html',
  styleUrl: './subscribers.css'
})
export class Subscribers {

  private _subscriberService = inject(SubscriberService);
  private _viewContainerRef = inject(ViewContainerRef);
  
  subscribers = signal<any[]>([]);
  searchQuery = signal('');
  currentPage = signal(1);
  itemsPerPage = signal(10);

  filteredSubscribers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.subscribers().filter((user) =>
      user.firstname.toLowerCase().includes(query) ||
      user.lastname.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  totalPages = computed(() => Math.ceil(this.filteredSubscribers().length / this.itemsPerPage()));

  paginatedSubscribers = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
    const endIndex = startIndex + this.itemsPerPage();
    return this.filteredSubscribers().slice(startIndex, endIndex);
  });

  private switchMapSubject = new Subject<number>();
  private concatMapSubject = new Subject<number>();
  private mergeMapSubject = new Subject<number>();
  private exhaustMapSubject = new Subject<number>();
  private searchSubject = new Subject<string>();

  constructor() {
    // SwitchMap: Cancels the previous inner observable (api call) if a new value is emitted.
    this.switchMapSubject.pipe(
      tap(id => console.log(`SwitchMap Source: ${id}`)),
      switchMap(id => this.simulateApiCall(id, 'SwitchMap'))
    ).subscribe(res => console.log(res));

    // ConcatMap: Queues the inner observables. Waits for current to complete before starting next.
    this.concatMapSubject.pipe(
      tap(id => console.log(`ConcatMap Source: ${id}`)),
      concatMap(id => this.simulateApiCall(id, 'ConcatMap'))
    ).subscribe(res => console.log(res));

    // MergeMap: Runs inner observables in parallel.
    this.mergeMapSubject.pipe(
      tap(id => console.log(`MergeMap Source: ${id}`)),
      mergeMap(id => this.simulateApiCall(id, 'MergeMap'))
    ).subscribe(res => console.log(res));

    // ExhaustMap: Ignores new source values if the inner observable is still pending.
    this.exhaustMapSubject.pipe(
      tap(id => console.log(`ExhaustMap Source: ${id}`)),
      exhaustMap(id => this.simulateApiCall(id, 'ExhaustMap'))
    ).subscribe(res => console.log(res));

    // Search with switchMap
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => of(term).pipe(delay(500)))
    ).subscribe((term) => {
      this.searchQuery.set(term);
      this.currentPage.set(1);
    });
  }

  ngOnInit(): void {
    this.getSubscribers();
  }

  getSubscribers() {
    this._subscriberService.getSubscribers().subscribe((data: any) => {
      this.subscribers.set(data);
    });
  }

  simulateApiCall(id: number, type: string) {
    const user = this.subscribers().find((u) => u.id === id);
    const name = user ? `${user.firstname} ${user.lastname}` : 'Unknown';
    return of(`[${type}] Response for ${name} (ID: ${id})`).pipe(
      delay(2000) // 2 seconds delay
    );
  }

  triggerSwitchMap() {
    this.switchMapSubject.next(this.getRandomSubscriberId());
  }

  triggerConcatMap() {
    this.concatMapSubject.next(this.getRandomSubscriberId());
  }

  triggerMergeMap() {
    this.mergeMapSubject.next(this.getRandomSubscriberId());
  }

  triggerExhaustMap() {
    this.exhaustMapSubject.next(this.getRandomSubscriberId());
  }

  getRandomSubscriberId() {
    const users = this.subscribers();
    return users.length > 0 ? users[Math.floor(Math.random() * users.length)].id : Math.floor(Math.random() * 100);
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }

  onView(user: any) {
    this._viewContainerRef.clear();
    const componentRef:any = this._viewContainerRef.createComponent(ViewUser);
    componentRef.instance.user = user;
    componentRef.instance.close.subscribe(() => {
      this._viewContainerRef.clear();
    });
  }

  onEdit(user: any) {
    console.log('Edit user:', user);
  }
}
