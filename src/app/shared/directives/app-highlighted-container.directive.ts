import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlightedContainer]',
  exportAs: 'hlc'
})
export class HighlightedContainerDirective {

  @Input('highlightedContainer') isHighlighted: boolean = false;
  @HostBinding('class.shadow-container--white') get cssClasses() {
    return this.isHighlighted;
  }

  @Output() toggleHighlight = new EventEmitter<boolean>();
  @HostListener('mouseenter', ['$event']) onMouseEnter (event: MouseEvent ) {
    this.isHighlighted = true;
    this.toggleHighlight.emit( this.isHighlighted );
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave( event: MouseEvent ) {
    this.isHighlighted = false;
    this.toggleHighlight.emit( this.isHighlighted );
  }

  constructor(private readonly eleRef: ElementRef) { }

  toggle() { this.isHighlighted = !this.isHighlighted; }

}
