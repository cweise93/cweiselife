import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private storageKey = 'blogVotes';

  getVoteStatus(postId: string): boolean {
    const votes = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    return votes[postId] || false;
  }

  setVoteStatus(postId: string, status: boolean): void {
    const votes = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    votes[postId] = status;
    localStorage.setItem(this.storageKey, JSON.stringify(votes));
  }

  constructor() { }
}
