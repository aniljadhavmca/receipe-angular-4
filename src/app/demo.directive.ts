import { Directive,ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(elRef: ElementRef) { 
    
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';
  @HostBinding('style.transition') transition;

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor='blue';
    this.transition='1s ease-in-out'
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor='red';
  }

}
