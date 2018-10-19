import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container main-container">
    <h1>Demo <small>angular</small></h1>
    <hr>

    <app-ng-style></app-ng-style>
    <hr>

    <app-css></app-css>
    <p>Hola mundo desde app.component.html</p>
    <hr>

    <app-clases></app-clases>
    <hr>

    <span [appResaltado]="'orange'">
      Hola mundo directiva
    </span>
    <hr>

    <app-ng-switch></app-ng-switch>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
