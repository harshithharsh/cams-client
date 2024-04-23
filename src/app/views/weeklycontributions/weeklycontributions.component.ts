import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-weeklycontributions',
  templateUrl: 'weeklycontributions.component.html',
  styleUrls: ['weeklycontributions.component.css']
})
export class WeeklycontributionsComponent {
  
  constructor(
    private sanitizer: DomSanitizer,private modalService: NgbModal
  ) { }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
