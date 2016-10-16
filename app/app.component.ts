import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
  public isDisplayed: boolean = false;

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }
}
