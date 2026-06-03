import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiSpendLeversPrioritizationMapState {
  readonly difficultyIds = signal<string[]>([]);
  readonly benefitIds = signal<string[]>([]);
  readonly selectedLeverId = signal<string | null>(null);
  readonly configSignature = signal<string | null>(null);

  initialize(signature: string, difficultyIds: string[], benefitIds: string[]): void {
    if (this.configSignature() === signature && this.difficultyIds().length && this.benefitIds().length) {
      return;
    }

    this.configSignature.set(signature);
    this.difficultyIds.set([...difficultyIds]);
    this.benefitIds.set([...benefitIds]);
  }
}
