import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SignListComponent } from "./components/sign-list/sign-list.component";
import { User } from './models/user';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, SignUpComponent, SignListComponent]
})
export class AppComponent {
  title = 'angular-task';

  users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }
}

