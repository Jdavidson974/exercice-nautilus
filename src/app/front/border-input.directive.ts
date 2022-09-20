import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderInput]'
})
export class BorderImputDirective {

  constructor(private el: ElementRef) {
    this.setBorder(this.initial_border_color);
    this.setBackgroundColor(this.initial_background_color);
  }
  initial_border_color : string ="#000000"; 
  initial_background_color : string = "#ffffff";
  // applique le css sur l'element native grace a un listener 
  @HostListener('mouseenter') onMouseenter(){
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initial_border_color);
  }

  @HostListener('focus') onFocus(){
    this.setBackgroundColor("#B5B4B1");
  }

  @HostListener('focusout') onFocusOut(){
    this.setBackgroundColor(this.initial_background_color);
  }
  // applique une bordure a l'element native 
  setBorder(color:string){
    this.el.nativeElement.style.border = `solid 2px ${color}`;
  }
  // applique un bg color a l'element native
  setBackgroundColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
