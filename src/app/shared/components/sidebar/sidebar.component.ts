import { Modules, SettingsService } from 'src/app/services/settings.service';
import { IconService } from './../../../services/icon.service';
import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { lStorage } from '../../localStorageKeys';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  @Input() expandedMenu!: boolean;
  svgFileRoutes!: string[];
  Modules!: Modules[];
  Logo?: Modules;
  currentRoute!: string;

  constructor (
    private iconService: IconService,
    private settingsService: SettingsService,
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.fnGetIcons();
    this.fnGetModules();

    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        if (localStorage.getItem(lStorage.sidebar.currentRoute))
          this.currentRoute = <string>localStorage.getItem(lStorage.sidebar.currentRoute);
        else this.currentRoute = event.urlAfterRedirects;

        this.currentRoute = this.currentRoute.replace(/"/g, '');
        localStorage.setItem(lStorage.sidebar.currentRoute, this.currentRoute);

        if(this.currentRoute !== '' && this.currentRoute !== undefined && this.currentRoute !== 'auth'){
          this.router.navigate([this.currentRoute]);
        }
      });
  }

  fnGetIcons(){
    this.iconService.fnHttpGetIcons().subscribe((icons) => {
      this.svgFileRoutes = icons;
    });
  }

  fnGetModules(){
    this.settingsService.fnHttpGetModules().subscribe((response: HttpResponse<Modules[]>) => {
      if (response.ok){
        this.Modules = JSON.parse(JSON.stringify(response.body));
        this.Logo = this.Modules[0];
        this.Modules = this.Modules.slice(1);
      }
      else console.log(`Status code: ${response.status}, message: ${response.statusText}`);

    }, err =>{
      console.error(`Ocurrió un error: ${err}`)
    });
  }

  fnNavigate(moduleId: number, url?: string){
    const $Listli = document.querySelectorAll('.navigation_ul_li');
    let $li: Element = document.createElement('li');
    console.log(url)
    $Listli.forEach(li => $li = li.id == moduleId.toString() ? li : $li)
    $li.classList.add('active');
    $Listli.forEach(li => { if (li != $li) li.classList.remove('active')});

    this.router.navigate([url]);
    localStorage.setItem(lStorage.sidebar.currentRoute, JSON.stringify(url));;
  }

}
