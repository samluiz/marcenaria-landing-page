import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent implements OnInit {
  constructor() {}

  @Input() target: string = '_blank';
  @Input() text: string = 'FAÇA UM ORÇAMENTO';
  @Input() image: string = 'whatsapp';
  @Input() href: string =
    'https://wa.me/5586995308265?text=Ol%C3%A1,%20desejo%20fazer%20um%20or%C3%A7amento.';

  ngOnInit(): void {}
}
