import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projekt';
  selectedShape: string = 'circle';
  // Dodaj wartości dla radius, side, length, and width

  result: string = '';

  // Dodanie funkcji aktualizującej wynik, gdy jest on emitowany z komponentu podrzędnego.
  // Przykład: updateResult(result: string) { ... }
}
