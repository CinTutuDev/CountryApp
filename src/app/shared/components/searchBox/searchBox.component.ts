import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebouncer = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebouncer.emit(value);
      console.log('Debouncer value', value);
    });
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
