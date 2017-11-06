import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  selected = null;
  gotClicked (timezone) {
    this.time = new Date()
    if (timezone == 'PST') {
      console.log("PST");
      this.selected = "PST";
    }
    if (timezone == 'MST') {
      this.time.setHours(this.time.getHours() + 1);
      console.log("MST");
      this.selected = "MST";
    }
    if (timezone == 'CST') {
      this.time.setHours(this.time.getHours() + 2);
      console.log("CST");
      this.selected = "CST";
    }
    if (timezone == 'EST') {
      this.time.setHours(this.time.getHours() + 3);
      console.log("EST");
      this.selected = "EST";
    }
    if (timezone == 'CLEAR') {
      this.time.setHours(this.time.getHours());
      console.log("clear");
      this.selected = "CLEAR";
    }
  }
}
