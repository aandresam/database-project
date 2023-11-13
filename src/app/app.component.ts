import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { Router } from '@angular/router';
import { lStorage } from './shared/localStorageKeys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild(SidebarComponent) sidebar!: SidebarComponent
  @ViewChild(HeaderComponent) header!: HeaderComponent
  @ViewChild('container') container!: ElementRef;
  isLogged!: boolean;
  expandedMenu!: boolean;

  constructor (private router: Router) {

  }

  ngOnInit(): void {
    this.isLogged = true;
    if (this.isLogged) this.router.navigate(['pages']);
    else this.router.navigate(['login']);

    const expandedMenu = localStorage.getItem(lStorage.app.expandedMenu);

    if (expandedMenu && expandedMenu !== '')  this.expandedMenu = JSON.parse(expandedMenu);
    else this.expandedMenu = true;

  }

  fnChangeSizeMenuLayout(action: boolean){
    this.expandedMenu = action;
    localStorage.setItem(lStorage.app.expandedMenu, JSON.stringify(this.expandedMenu));
  }


}
