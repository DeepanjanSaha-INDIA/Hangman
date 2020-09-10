import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/questions.json';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  questions: any = (data as any).default.result;
  qno: number = 0;
  solution: string = "";

  constructor() { }

  ngOnInit() {
    console.log(this.questions);
  }

  next(event) {
    this.qno += 1;
    this.solution = "";
  }

}
