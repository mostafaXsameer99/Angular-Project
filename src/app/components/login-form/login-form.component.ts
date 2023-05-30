import { Component } from '@angular/core';
import { UserModel } from 'src/app/Shared/IUserModel';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  //loginModel = new LoginModel("", "");
  userModel = new UserModel("", "", "", "", "");
  match:number = 0;

  onLogin() {


    const usersJSON = localStorage.getItem('users');
    const users: any[] = usersJSON ? JSON.parse(usersJSON) : [];

    // Find user with matching credentials
    const matchedUser =
      users.find(user => user.password === this.userModel.password && user.email === this.userModel.email);

    if (matchedUser) {
      console.log(`اتفضل يا معلمي `);
      this.match = 1;
    } else {
      console.log(`انت مين `);
      this.match = 2;
    }
  }
}

