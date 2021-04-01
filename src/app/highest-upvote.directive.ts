import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighestUpvote]',
})
export class HighestUpvoteDirective {
  constructor(elem: ElementRef) {
    elem.nativeElement.style.color = 'yellow';
    // elem.nativeElement.style.textShadow =
    //   '1px 1px 2px black, 0 0 25px yellow, 0 0 5px black';
  }
}
