import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weeklycontributions',
  templateUrl: 'weeklycontributions.component.html',
  styleUrls: ['weeklycontributions.component.css']
})
export class WeeklycontributionsComponent {
  constructor(
    private sanitizer: DomSanitizer
  ) { }
}
