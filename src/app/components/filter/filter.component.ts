import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PecasdataService } from 'src/app/api/pecasdata.service';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

export class FilterComponent implements OnInit {
  @Output() parameFiltro = new EventEmitter();
  @Output() esconder = new EventEmitter<string>();
  myvisit: boolean;
  vistas: boolean;
  rating = [];
  autores = [];
  autoresSelected = [];
  constructor(peca: PecasdataService) {
    this.myvisit = false;
    this.vistas = false;
    peca.getPecas().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.autores.push(data[i].Autor);
      }
    })
  }

  ngOnInit() {
    this.myvisit = false;
    this.vistas = false;
    this.autoresSelected = [];
    this.rating = [];
  }


  ok() {
    var filtros = [{
      MyVisit: this.myvisit,
      Vistas: this.vistas,
      Autores: this.autoresSelected,
      Ratings: this.rating
    }]
    this.parameFiltro.emit(filtros);
    this.esconder.emit();

  }
}
