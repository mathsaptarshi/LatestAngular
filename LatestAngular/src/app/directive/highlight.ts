import { Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {

  @Input() appHighlight = '';
  constructor(private el:ElementRef, private renderer:Renderer2) {

  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
  
  @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight || 'orange');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }
}
