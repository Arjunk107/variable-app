import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.example();
  }
  title = 'variable-apps';
  example() {
    var number = 10;
    let variable = "hello";
    const name = 'Arjun k'
    if (number > 2) {
      let variable = "Welcome";
      var number = 20;
      console.log(variable);
      console.log(number)
    }
    console.log(number);
    console.log(name);
    console.log(variable);
  }
}
