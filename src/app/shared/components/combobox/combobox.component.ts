import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, map, debounceTime, distinctUntilChanged, tap, switchMap, of, Observable } from 'rxjs';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent implements OnInit{

  @ViewChild('carSearchInput') carSearchInput!: ElementRef;
  @Output() setcarNameEvent = new EventEmitter<{name: string}>();

  cars: any = [];
  showSearches: boolean = false;
  isSearching:boolean = false;
  searchedCars: any = [];

  constructor() {
    this.cars = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];
    this.searchedCars = this.cars;
  }

  ngOnInit() {
  	this.carSearch();
  }

  getCars(name: any): Observable<any> {
    return of(this.filterCars(name))
  }

  filterCars(name: string) {
    return this.cars.filter((val: string) => val.toLowerCase().includes(name.toLowerCase()) == true )
  }

  carSearch() {
    const search$ = fromEvent(this.carSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(()=> this.isSearching = true),
      switchMap((term) => term ? this.getCars(term) : of<any>(this.cars)),
      tap(() => {
        this.isSearching = false,
        this.showSearches = true;
      }));

      search$.subscribe(data => {
        this.isSearching = false
        this.searchedCars = data;
      })
  }

  setCarName(name: any) {
    this.searchedCars = this.filterCars(name);
    this.setcarNameEvent.emit({name});
    this.carSearchInput.nativeElement.value = name;
    this.showSearches = false;
  }

  trackById(index: any,item: { _id: void; }):void{
    return item._id;
  }

}
