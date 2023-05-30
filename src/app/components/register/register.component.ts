import { Component } from '@angular/core';
import { UserModel } from 'src/app/Shared/IUserModel';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  knowFrom = ["facebook", "twitter", "google", "LinkedIn"];
  userModel = new UserModel("", "", "", "", "");
  alreadyUsed = false;
  constructor(private enrollService: EnrollService) {

  }
  onSubmit() {


    this.enrollService.enroll(this.userModel).subscribe({
      next: data => {


        const usersJSON = localStorage.getItem('users');
        let users: any[] = usersJSON ? JSON.parse(usersJSON) : [];

        let isUsernameTaken = users.some(user => user.email === this.userModel.email);
        if (isUsernameTaken) {
          console.log(`This Email is Already Used`);
          this.alreadyUsed = true;
          return;
        }

        users.push(this.userModel);
        localStorage.setItem('users', JSON.stringify(users));





        //console.log(data)
      },
      error: error => console.log(error)
    })
  }
}

