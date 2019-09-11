import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PecasdataService } from 'src/app/api/pecasdata.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  id;
  autor: any;
  constructor(private route: ActivatedRoute, private pecasdata: PecasdataService,
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.pecasdata.getAutores().subscribe((data) => {
      let autores = Object.values(data);
      for (let i = 0; i < autores.length; i++) {
        if (autores[i].title == this.id) {
          console.log("data " + autores[i] + "id " + this.id);
          this.autor = autores[i];
        }
      }
    });
  }

}
