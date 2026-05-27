import { Injectable, signal } from '@angular/core';

export interface AgentGradingWorkspaceSnapshot {
  totalScore: number;
  maxScore: number;
  completedDimensions: number;
  totalDimensions: number;
  grade: string;
  gradeCode: string;
  gradeTitle: string;
  posture: string;
  overrideCount: number;
  blockerCount: number;
  overrideLabels: string[];
  blockerLabels: string[];
  requiredEvidence: string[];
}

const EMPTY_SNAPSHOT: AgentGradingWorkspaceSnapshot = {
  totalScore: 0,
  maxScore: 0,
  completedDimensions: 0,
  totalDimensions: 0,
  grade: 'Not classified',
  gradeCode: 'G0',
  gradeTitle: 'Disposable Agent',
  posture: 'Choose scores to classify the agent',
  overrideCount: 0,
  blockerCount: 0,
  overrideLabels: [],
  blockerLabels: [],
  requiredEvidence: []
};

@Injectable({ providedIn: 'root' })
export class AgentGradingWorkspaceService {
  readonly snapshot = signal<AgentGradingWorkspaceSnapshot>(EMPTY_SNAPSHOT);

  private exportJsonHandler: (() => void) | null = null;
  private exportCsvHandler: (() => void) | null = null;

  update(snapshot: AgentGradingWorkspaceSnapshot): void {
    this.snapshot.set(snapshot);
  }

  registerExports(exportJson: (() => void) | null, exportCsv: (() => void) | null): void {
    this.exportJsonHandler = exportJson;
    this.exportCsvHandler = exportCsv;
  }

  exportJson(): void {
    this.exportJsonHandler?.();
  }

  exportCsv(): void {
    this.exportCsvHandler?.();
  }

  reset(): void {
    this.snapshot.set(EMPTY_SNAPSHOT);
    this.exportJsonHandler = null;
    this.exportCsvHandler = null;
  }
}
