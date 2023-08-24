import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  data = {email:"",password:"",}

  constructor(private http:HttpClient){}

  loginUser = () => {
    this.http.get(`https://json-signup-login.onrender.com/users`).subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          const emailList = response.find(item => item.email===this.data.email && item.password === this.data.password);
          if(emailList){
            alert("Login Successfully!")
          }
        } else {
          console.log('Response is not an array:', response);
        }
      },
      (error) => {
        console.error('GET request error:', error);
        // Handle the error or display an error message to the user
      }
    );
  }
}
