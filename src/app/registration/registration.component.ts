import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData = { password: '', email: '' };

  constructor(private http: HttpClient) {}

  registerUser() {
    // Perform client-side validation here if needed
    
    const newUser = { ...this.userData };

    // Send a POST request to the JSON Server
    this.http.post('https://json-signup-login.onrender.com/users', newUser).subscribe(
      (response: any) => {
        alert('User registered:');
        // Display a success message to the user
        this.userData = { password: '', email: '' };
      },
      (error) => {
        alert('Registration error:');
        // Display an error message to the user
        this.userData = { password: '', email: '' };
      }
    );
  }
}
