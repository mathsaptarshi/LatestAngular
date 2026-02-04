import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../directive/highlight';
import { TextFormatPipe } from '../pipes/text-format-pipe';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule, Highlight, TextFormatPipe],
  templateUrl: './view-user.html',
  styleUrl: './view-user.css'
})
export class ViewUser {
  @Input() user: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}