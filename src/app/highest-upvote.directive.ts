import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvote]'
})
export class HighestUpvoteDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.textShadow = "1px 1px 2px black, 0 0 25px black, 0 0 5px rgb(248, 184, 184)";
  }

}
