import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input() appTooltip = '';

  private tooltipElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {

    if (!this.appTooltip || this.tooltipElement) {
      return;
    }

    // Créer un élément span
    this.tooltipElement =
      this.renderer.createElement('span');

    // Créer un nœud texte
    const text =
      this.renderer.createText(this.appTooltip);

    // Ajouter le texte dans le span
    this.renderer.appendChild(
      this.tooltipElement,
      text
    );

    // Positionner l'élément parent
    this.renderer.setStyle(
      this.el.nativeElement,
      'position',
      'relative'
    );

    // Styliser la bulle
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'top', '100%');
    this.renderer.setStyle(this.tooltipElement, 'left', '0');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
    this.renderer.setStyle(this.tooltipElement, 'background', '#1f2937');
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'padding', '8px 12px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '6px');
    this.renderer.setStyle(this.tooltipElement, 'width', 'max-content');
    this.renderer.setStyle(this.tooltipElement, 'max-width', '300px');

    // Ajouter la bulle sous l'élément HTML
    this.renderer.appendChild(
      this.el.nativeElement,
      this.tooltipElement
    );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {

    if (this.tooltipElement) {

      // Supprimer la bulle
      this.renderer.removeChild(
        this.el.nativeElement,
        this.tooltipElement
      );

      this.tooltipElement = null;
    }
  }
}
