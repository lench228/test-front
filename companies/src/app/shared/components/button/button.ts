import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  protected handleClick(event: MouseEvent) {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}
