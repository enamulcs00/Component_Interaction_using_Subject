import { InteractionService } from './interaction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'interaction';
  constructor(private interaction:InteractionService){}
  greet(){
this.interaction.sendMessage('Greeting some one')
  }
  appreciate(){
this.interaction.sendMessage('weldone')
  }
}
