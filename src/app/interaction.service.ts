import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
private source = new Subject<any>()
message$ = this.source.asObservable()
  constructor() { }

  sendMessage(message:any){
    this.source.next(message)
  }
}
