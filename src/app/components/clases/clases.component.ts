import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta: string = "alert-danger";
  props: Object = {
    'danger': true
  }
  loading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ejecutarProceso() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);
  }

}
