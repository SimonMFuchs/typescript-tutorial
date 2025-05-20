import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'typescript-tutorial';

  theArray: (number | string | boolean) [] = [1, 2, true, "hey"];  
  theArray2: undefined [] = [];
  // theArray3: number & string [] = [1, "hey"]; 
  theArray4: null[] = [];

  constructor() {
    this.theArray = [1,"4"];
    this.add(1,2);
  }

  // Parameter  definieren und aber auch den Rückgabewert der Funktion
  add(a:number, b:number):number {
    return a + b;
  }
}
