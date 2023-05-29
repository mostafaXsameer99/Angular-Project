import { Component } from '@angular/core';
import { IUser } from 'src/app/Shared/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  usersList: IUser[] | undefined;
  errMessage: any;
  constructor(private userService:UsersService) {
  
  }

  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe({
      next:data=>this.usersList=data,
      error:err=>this.errMessage=err
    });
  }
}
