import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeeklyContributionService {
  createPost(postData: { sundayCollection: string; kurishadi: string; monthlyContribution: string; nercha: string; lelam: string; birthday: string; }) {
    throw new Error('Method not implemented.');
  }

  baseUrl = "localhost:4200/" ;

  constructor(private _http: HttpClient) { }

  getKpis() {
    return this._http.get(this.baseUrl + '/fetchAllKPIs');
  }

}
