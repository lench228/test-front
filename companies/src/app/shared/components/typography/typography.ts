import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  imports: [],
  templateUrl: './typography.html',
  styleUrl: './typography.scss',
})
export class Typography {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'body' | 'body-2' | 'subtitle' | 'label' = 'body';
  @Input() for = '';
  @Input() text = '';

  protected getClassName = () => {
    return `base ${this.variant}`;
  };
}
