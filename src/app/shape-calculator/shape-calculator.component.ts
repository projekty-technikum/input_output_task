import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shape-calculator',
  templateUrl: './shape-calculator.component.html',
  styleUrl: './shape-calculator.component.css',
})
export class ShapeCalculatorComponent {
  // Dodanie właściwości @Input() dla kształtu, promienia, boku, długości i szerokości.
  // Przykład: @Input() shape: string = '';

  // Dodaj właściwość @Output(), aby wyemitować obliczony wynik
  // Przykład: @Output() resultCalculated = new EventEmitter<string>();

  calculate() {
    let result = '';
    switch () {
      case 'circle':
        break;
      case 'square':
        break;
      case 'rectangle':
        break;
    }
    // Wyemituj wynik za pomocą właściwości @Output()
  }
}