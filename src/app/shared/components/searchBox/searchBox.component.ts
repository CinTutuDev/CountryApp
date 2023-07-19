import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebouncer = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebouncer.emit(value);
        /*  console.log('Debouncer value', value); */
      });
  }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }
  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
