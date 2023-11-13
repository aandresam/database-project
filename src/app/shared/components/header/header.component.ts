import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output() changeSizeMenuLayout = new EventEmitter<boolean>();
  @Input() expandedMenu!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  fnExpandMenu(){
    if (this.expandedMenu) this.expandedMenu = false;
    else this.expandedMenu = true;
    this.changeSizeMenuLayout.emit(this.expandedMenu);
  }
}
