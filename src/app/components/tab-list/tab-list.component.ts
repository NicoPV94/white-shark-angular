import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/http/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {
  items: any[] = [];
  campaigns: any[] = [];
  campaignGroup: any;
  selectedItem: FormControl;


  constructor(private httpService: ApiService) { }

  ngOnInit(): void {
    this.selectedItem = new FormControl('tab0');

    this.getItems();
    this.getCampaigns();
    this.getCampaignGroups();
  }

  getItems() {
    this.httpService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  getCampaigns() {
    this.httpService.getCampaigns().subscribe(campaigns => {
      this.campaigns = campaigns;
    });
  }

  getCampaignGroups() {
    this.httpService.getCampaignGroups("1").subscribe(campaignGroups => {
      this.campaignGroup = campaignGroups[0];
    });
  }

}
