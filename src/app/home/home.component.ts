import { Component, OnInit, Optional } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *',[
        query(':enter',style({ opacity: 0}), { optional:true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({ opacity: 0,transform: 'translateY(-75%)',offset: 0}),
            style({ opacity: .5,transform: 'translateY(35px)',offset: .3}),
            style({ opacity: 1,transform: 'translateY(0)',offset: 1}),
          ]))]), {optional: true}),
          query(':leave',stagger('300ms',[
            animate('.6s ease-in', keyframes([
              style({ opacity: 1,transform: 'translateY(0)',offset: 0}),
              style({ opacity: .5,transform: 'translateY(35px)',offset: .3}),
              style({ opacity: 0,transform: 'translateY(-75%)',offset: 1}),
            ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  
  itemCount: number = 4;
  btnText : string = "Add your bucket";
  goalText : string = 'Start...';
  goals=['this is first value 1','this is first value 2','this is first value 3'];
  constructor(private _data: DataService) { }

  ngOnInit() {
   this.itemCount =  this.goals.length;
  }

  addItem(){
   this.goals.push(this.goalText);
   this.goalText = '';
   this.itemCount =  this.goals.length;
   this._data.changeGoal(this.goals);
  }
  
  removeIn(i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

}
