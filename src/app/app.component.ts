import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valentine';

  yesClicked = false;

  mouseTarget = document.querySelector('#mouseTarget');

  onMouseOver() {
    const button = document.getElementById('nobtn');
    button?.addEventListener('mouseover', function () {
      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    });
  }

  clickNo() {
    const button = document.getElementById('nobtn');
    button?.addEventListener('click', function () {
      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    });
  }

  clickYes() {
    this.yesClicked = true;
  }
}
