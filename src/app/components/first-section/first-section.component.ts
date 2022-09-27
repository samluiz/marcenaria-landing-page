import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent implements OnInit {
  constructor() {}

  @Input() text: string = 'FAÇA UM ORÇAMENTO';
  @Input() image: string = 'whatsapp';

  ngOnInit(): void {}
}
