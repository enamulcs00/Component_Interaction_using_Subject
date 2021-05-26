import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
msg:any
msg1:any
  constructor(private inter:InteractionService) { }

  ngOnInit(): void {
    this.inter.message$.subscribe((res:any)=>{
      if(res=='Greeting some one'){
        alert(res)
        this.msg = res
      }else if(res=='weldone'){
        alert('Thanks')
        this.msg1 = res
      }
    })
  }

}
