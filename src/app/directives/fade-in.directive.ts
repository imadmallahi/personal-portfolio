import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '.fade-in',
    standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
    private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.el.nativeElement.classList.add('visible');
                    this.observer?.unobserve(this.el.nativeElement);
                }
            });
        }, {
            threshold: 0.1
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
