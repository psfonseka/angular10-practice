import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'overlay',
  styleUrls: ['./overlay.component.scss'],
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {

  isOpen = false;
  @Input() text = 'TEST overlay';
}