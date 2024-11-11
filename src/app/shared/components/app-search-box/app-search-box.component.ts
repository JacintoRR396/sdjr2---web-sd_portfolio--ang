import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'sdjr2--app-search-box',
  templateUrl: './app-search-box.component.html',
  styleUrl: './app-search-box.component.scss',
})
export class SearchBoxComponent {
  @Input({ required: true }) public placeholder: string = '';
  @Input() public initialValue: string = '';
  @Input() public debounceTime: number = 300;

  @Output() public onValueEmitter = new EventEmitter<string>();
  @Output() public onDebounceEmitter = new EventEmitter<string>();

  @ViewChild('searchTxtInput') public searchTxt!: ElementRef<HTMLInputElement>;

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => {
        this.onDebounceEmitter.emit(value);
        console.log(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  onKeyUp(): void {
    this.emitDebounce();
  }

  private emitValue(): void {
    this.onValueEmitter.emit(this.searchTxt.nativeElement.value);
  }

  private emitDebounce(): void {
    this.debouncer.next(this.searchTxt.nativeElement.value);
  }
}
