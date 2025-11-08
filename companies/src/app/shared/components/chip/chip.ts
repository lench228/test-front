import { Component, Input } from '@angular/core';
import { Typography } from '@/shared';

@Component({
  selector: 'app-chip',
  imports: [Typography],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
})
export class Chip {
  @Input() text = '';
}
