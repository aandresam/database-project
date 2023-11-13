import { HttpResponse } from '@angular/common/http';
import { Modules, SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  loading: boolean = true;

  constructor () {}

  ngOnInit(): void {
    setTimeout(() => this.loading = false, 500);
  }


}
