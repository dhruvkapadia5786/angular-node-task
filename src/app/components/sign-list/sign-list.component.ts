import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './sign-list.component.html',
  styleUrl: './sign-list.component.css'
})
export class SignListComponent {
  @Input() users: User[] = [];

  constructor(public userService: UserService){

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getProfileInitials(user: User): string {
    const initials = user.firstname.charAt(0)
    return initials.toUpperCase();
  }

}
