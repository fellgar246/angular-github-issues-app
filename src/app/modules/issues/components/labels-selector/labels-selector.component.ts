import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { GithubLabel } from '../../interfaces';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  labels = input.required<GithubLabel[]>()

  issuesService = inject(IssuesService);

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }
}
