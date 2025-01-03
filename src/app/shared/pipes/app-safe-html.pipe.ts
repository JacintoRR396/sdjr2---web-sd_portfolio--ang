import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor( private readonly sanitizer: DomSanitizer ){}
  transform( url: string ): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml( url );
  }
}
