import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{

  @ViewChild(SidebarComponent) sidebar!: SidebarComponent
  @ViewChild(HeaderComponent) header!: HeaderComponent
  sidebarWidth!: string;
  headerProperties!: {
    width: string,
    left: string;
  };

  constructor () {

  }

  ngOnInit(): void {
    this.sidebarWidth = '300px'
    this.headerProperties = {
      width: 'calc(100% - 300px)',
      left: '300px'
    }
  }

  fnChangeSizeMenuLayout(action: boolean){
    if (action) {
      this.sidebarWidth = '80px';
      this.headerProperties = {
        width: 'calc(100% - 80px)',
        left: '80px'
      }
    }
    else{
      this.sidebarWidth = '300px';
      this.headerProperties = {
        width: 'calc(100% - 300px)',
        left: '300px'
      }
    }
  }
}
