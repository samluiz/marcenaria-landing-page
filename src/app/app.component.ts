import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'gilbertoApp';

  constructor(private metaTagService: Meta) {}

  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Serralheiro, Serralheria, Soldador, Soldar, Serviço, Trabalhador, Gilberto, Gilberto Machado, SAURS, Samuel Luiz, Grade, Portão',
      },
      {
        name: 'description',
        content:
          'Serralheiro Gilberto Machado, Parnaíba - PI. Forjando soluções nos mínimos detalhes',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Samuel Luiz' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8 ' },
    ]);
  }
}
