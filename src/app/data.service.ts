import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The subject','This is the second subject']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
   this.goals.next(goal);     
  }
}
