import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  counter: number = 0
  inc(): void { this.counter++ }
  dec(): void { this.counter-- }
}
