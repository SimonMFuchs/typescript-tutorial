import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],                                
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  {
  title = 'typescript-tutorial';

  fruit = "";
  fruitList = ["banana"]


  constructor() {
    let banana = this.fruitList.pop();
    if (banana != undefined) {
      this.fruit = banana;            // nur noch string, da er sonst nicht in die if Anweisung rein geht
    } else {
      banana                          // nur noch undefined, da er bei string hier gar nicht ankommt
    }
  }
}
