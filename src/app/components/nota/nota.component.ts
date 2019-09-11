import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SqlPecaCrudService } from 'src/app/sql/sql-peca-crud.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss'],
})
export class NotaComponent implements OnInit {
  @Input() data;
  @Output() event = new EventEmitter();
  txt: string;
  constructor(public peca: SqlPecaCrudService) {

  }

  ngOnInit() {
    this.peca.getData(this.data).then((data) => {
      this.txt = data.notas;
    })
  }
  newdata(event) {
    let nota = event.target.value;
    this.event.emit(nota);
  }

}
