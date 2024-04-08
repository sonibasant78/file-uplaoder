import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 7 - Example file upload queue';

  onCompleteItem($event:any) {
    console.log($event);
  }
}
