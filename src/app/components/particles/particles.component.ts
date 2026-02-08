import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
}

@Component({
    selector: 'app-particles',
    standalone: true,
    imports: [CommonModule],
    template: '<canvas #canvas></canvas>',
    styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `]
})
export class ParticlesComponent implements AfterViewInit {
    @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
    private ctx!: CanvasRenderingContext2D;
    private particles: Particle[] = [];
    private animationId: number | undefined;
    private mouse = { x: 0, y: 0 }; // Initialize to 0,0

    ngAfterViewInit() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
        this.resizeCanvas();
        this.createParticles();
        this.animate();
    }

    @HostListener('window:resize')
    resizeCanvas() {
        this.canvasRef.nativeElement.width = window.innerWidth;
        this.canvasRef.nativeElement.height = window.innerHeight;
        this.createParticles();
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }

    createParticles() {
        this.particles = [];
        // Adjust particle count based on screen size
        const particleCount = window.innerWidth * window.innerHeight / 9000;

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 2 + 0.5,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Draw particles
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            p.x += p.speedX;
            p.y += p.speedY;

            // Wrap around screen
            if (p.x < 0) p.x = window.innerWidth;
            if (p.x > window.innerWidth) p.x = 0;
            if (p.y < 0) p.y = window.innerHeight;
            if (p.y > window.innerHeight) p.y = 0;

            this.ctx.fillStyle = 'rgba(56, 189, 248, 0.5)'; // Accent color
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Connect particles
            this.connectParticles(p, i);

            // Connect to mouse
            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
                this.ctx.strokeStyle = `rgba(56, 189, 248, ${1 - distance / 120})`;
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
            }
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    connectParticles(p: Particle, index: number) {
        for (let j = index; j < this.particles.length; j++) {
            const p2 = this.particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                this.ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - distance / 100)})`;
                this.ctx.lineWidth = 0.5;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.stroke();
            }
        }
    }
}
