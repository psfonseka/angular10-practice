import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'tooltip',
  styleUrls: ['./tooltip.component.scss'],
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {

  isOpen = false;
  @Input() text = 'TEST TOOLTIP';
}