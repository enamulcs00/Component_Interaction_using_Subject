import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
msg:any
myDara='Child data'
mydara='dara'
  constructor(private inter:InteractionService) { }

  ngOnInit(): void {
    this.inter.message$.subscribe((res:any)=>{
      if(res=='Good morning'){
        console.log(res);

        this.msg = res
      }else if(res=='Weldone'){
        console.log(res)
        this.msg = res
      }
    })
  }
  sendToApp(){
    this.inter.sendMessage(this.myDara)
  }
  resendToApp(){
    this.inter.sendMessage(this.mydara)
  }
}
