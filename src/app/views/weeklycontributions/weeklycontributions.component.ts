import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeeklyContributionService } from './weeklycontributions.service';



@Component({
  selector: 'app-weeklycontributions',
  templateUrl: 'weeklycontributions.component.html',
  styleUrls: ['weeklycontributions.component.css']
})
export class WeeklycontributionsComponent {

  postData = {
    sundayCollection: '',
    kurishadi: '',
    monthlyContribution: '',
    nercha: '',
    lelam: '',
    birthday: ''
  };
  
  constructor(
    private sanitizer: DomSanitizer,private modalService: NgbModal,private service:WeeklyContributionService
  ) { }

  
  public open(modal: any): void {
    this.modalService.open(modal);
  }

  
}
