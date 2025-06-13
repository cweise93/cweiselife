import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vote-button',
  imports: [CommonModule, MatIconModule],
  templateUrl: './vote-button.component.html',
  styleUrl: './vote-button.component.scss'
})
export class VoteButtonComponent {
  @Input() count: number = 0;
  @Input() voted: boolean = false;

  @Output() votedChange = new EventEmitter<boolean>();
  @Output() countChange = new EventEmitter<number>();

  toggleVote(): void {
    this.voted = !this.voted;
    this.count += this.voted ? 1 : -1;
    this.votedChange.emit(this.voted);
    this.countChange.emit(this.count);
  }

}
