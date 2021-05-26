import { InteractionService } from './interaction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
msg1:any = 'Good morning'
msg2:any = 'Weldone'
  title = 'interaction';
  constructor(private interaction:InteractionService){
    this.interaction.message$.subscribe((res:any)=>{
  //   this.title = res
     if(res=='dara'){
       this.title = 'myDara'
     }else{
       this.title=res
     }
    })
  }
  greet(){
this.interaction.sendMessage(this.msg1)
  }
  appreciate(){
this.interaction.sendMessage(this.msg2)
  }
}
