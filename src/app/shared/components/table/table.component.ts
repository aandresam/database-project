import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() DataHeader: string[] = [];
  @Input() DataTable: any[] = [];
  @Input() TotalPages: number[] = [];
  @Input() TotalRecords: number = 0;

  constructor () {}

  ngOnInit(): void {
  }

}
