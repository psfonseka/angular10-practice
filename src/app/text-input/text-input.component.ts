import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Output() onMyInput = new EventEmitter();

  constructor() {
    
  }

  values = '';

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.onMyInput.emit(event.target.value);
  }

}
