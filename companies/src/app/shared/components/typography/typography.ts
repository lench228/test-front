import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  imports: [],
  templateUrl: './typography.html',
  styleUrl: './typography.scss',
})
export class Typography {
  @Input() variant: 'h1' | 'h2' | 'h3' | 'body' | 'body-2' | 'subtitle' = 'body';
  @Input() text = '';
}
