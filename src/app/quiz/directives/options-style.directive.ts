import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appOptionsStyle]'
})
export class OptionsStyleDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) { }


  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'cursor',  'pointer')
    this.renderer.setStyle(this.element.nativeElement, 'background-color',  'black')
    this.renderer.setStyle(this.element.nativeElement, 'transition',  '0.5s')
  }
  
  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color',  'transparent')
    this.renderer.setStyle(this.element.nativeElement, 'transition',  '0.5s')
    this.renderer.removeStyle(this.element.nativeElement, 'box-shadow')    
  }

  // @HostListener('click',['$event.target'])
  // onClick(btn: any){
  //   console.log(btn);
    
  // }



}
