import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {
  @HostBinding('class.in-view') isInView = false;
  @Input('appScrollAnimate') shouldAnimate = true;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (!this.shouldAnimate) {
      this.isInView = true;
      return;
    }

    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        this.isInView = true;
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(this.element.nativeElement);

    setTimeout(() => {
      this.isInView = true;
    }, 2000);
  }
}