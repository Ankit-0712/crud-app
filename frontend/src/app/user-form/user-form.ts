import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../Model/user';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.scss'],
  imports: [FormsModule, NgIf, ReactiveFormsModule] 
})
export class UserForm implements OnInit {
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
    private cd: ChangeDetectorRef,
    private fbb: FormBuilder
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

  saveUser(form: NgForm) {
    if (!form.valid) {
      alert('Please fill in all required fields correctly');
      return;
    }
    
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

  navigateHome() {
    this.router.navigate(['/']);
  }
}