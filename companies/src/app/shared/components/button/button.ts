import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() variant: 'default' | 'small' = 'default';

  buttonClick = output();

  handleClick() {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit();
    }
  }
}
