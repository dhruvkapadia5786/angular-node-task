import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  userForm : FormGroup;

  constructor(private fb: FormBuilder, public userService: UserService) {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      // Call a service or emit an event to send the user data to the backend
      console.log(user);
      this.userService.addUser(this.userForm.value).subscribe({
        next: (value) => {
          window.location.reload();
          // this.router.navigate(['dashboard']);
        }
      })
      // You can send the form value to your backend for registration
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}

