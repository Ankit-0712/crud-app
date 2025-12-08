import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.scss'],
  imports: [FormsModule]
})
export class UserForm implements OnInit {
navigateHome() {
throw new Error('Method not implemented.');
}
  id: any;
  isEdit = false;

  user: User = {
    name: '',
    email: '',
    phone: '',
    age: 0,
    techStack: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.resetUser(); 

      if (this.id) {
        this.isEdit = true;
        this.loadUser(this.id);
      } else {
        this.isEdit = false;
      }
    });
  }

  loadUser(id: any) {
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
      this.cd.detectChanges(); // update the form view immediately
    });
  }

  resetUser() {
    this.user = {
      name: '',
      email: '',
      phone: '',
      age: 0,
      techStack: ''
    };
  }

  saveUser() {
    if (this.isEdit) {
      this.userService.updateUser(this.id, this.user).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
