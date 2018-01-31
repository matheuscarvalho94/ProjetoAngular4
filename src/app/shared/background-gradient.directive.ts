import { Directive, ElementRef, Renderer, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[BackgroundGradient]'
})
export class BackgroundGradientDirective implements OnInit {

  @HostBinding('style.background-image') backgroundGradient: string;

  @Input('BackgroundGradient') Color = '#3c0c39, #53244f';

  constructor() {}

  ngOnInit() {

    this.getSetColor();

  }

  getSetColor() {

    this.backgroundGradient = 'linear-gradient(to bottom, ' + this.Color + ')';

  }

}
