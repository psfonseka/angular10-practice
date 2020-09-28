import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TextInputComponent } from './text-input/text-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(injector: Injector) { 
    const TextInputElement = createCustomElement(TextInputComponent, {injector});
    customElements.define('input-element', TextInputElement);
  }
}
