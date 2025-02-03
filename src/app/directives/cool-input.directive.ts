import {Directive, ElementRef, Injector, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement, 'background-color', 'green');
    this.rend.setAttribute(this.el.nativeElement, 'placeholder', this.el.nativeElement.getAttribute('placeholder') + '*');

    const text = this.rend.createElement('span');
    this.rend.setProperty(text, 'innerText', '*Обязательно для заполнения');
    this.rend.setStyle(text, 'color', 'red');
    this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement));
  }

}
