import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/testSVC';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor(public svc: MyService) { 
   
  }

  ngOnInit(): void {
    console.log(this.svc);
  }

  someFunction(str: string) {
    console.log(str);
  }

}
