import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit{

  @Input() btnwidth!: string;
  @Input() btnheigth!: string;
  @Input() submit!: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.btnwidth && this.btnwidth === '') this.btnwidth = '160px';
    if (this.btnheigth && this.btnheigth === '') this.btnheigth = '48px'
  }

}
