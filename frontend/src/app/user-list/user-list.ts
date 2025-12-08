import { CommonModule } from '@angular/common';
import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {

  users : User[] = [];
  constructor(private userService : UserService, private router : Router, private cd : ChangeDetectorRef){}

  ngOnInit() {
      this.loadUsers();
  }

  loadUsers(){
    this.userService.getUser(null).subscribe((data)=>{
      this.users = data;
      this.cd.detectChanges()
    })
  }

  createUser(){
    this.router.navigate(['/create']);
  }

  editUser(id : number){
    this.router.navigate(['/edit', id]);
    this.cd.detectChanges();
  }

deleteUser(user: User) {
  if (user.id === undefined) {
    console.error('Cannot delete user without an id');
    return;
  }
  this.userService.deleteUser(user.id).subscribe(
    res => {
      console.log(res); 
      this.users = this.users.filter(u => u.id !== user.id);
    },
    err => console.error(err)
  );
}


}
