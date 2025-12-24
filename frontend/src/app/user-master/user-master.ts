import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { techStack } from '../Model/techStack';
import { UserService } from '../services/user.service';
import { TechStackService } from '../services/tech-stack-service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-master',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-master.html',
  styleUrls: ['./user-master.scss'],
})
export class UserMaster implements OnInit {

  userForm!: FormGroup;
  techStacks: techStack[] = [];
  isEditMode = false;

  private userId?: number; 

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private techStackService: TechStackService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadTechStacks();

    // Detect edit mode using route param
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userId = +id;
      this.loadUserById(this.userId);
    }
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      techKey: [null, Validators.required]
    });
  }

  private loadTechStacks(): void {
    this.techStackService.getTechStacks().subscribe({
      next: (data) => {
        this.techStacks = data;
        console.log('Tech stacks loaded', data);
      },
      error: (err) => console.error('Error loading tech stacks', err)
    });
  }

  //  Load user and patch form
  private loadUserById(id: number): void {
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.userForm.patchValue({
          name: user.name,
          email: user.email,
          phone: user.phone,
          age: user.age,
          techKey: user.tech_key
        });
      },
      error: (err) => console.error('Error loading user', err)
    });
  }

  submit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userPayload: User = {
      ...this.userForm.value,
      id: this.userId 
    };

    if (this.isEditMode && this.userId) {
      this.userService.updateUser(this.userId, userPayload).subscribe(() => {
        alert('User updated successfully');
        this.router.navigate(['/']);
      });
    } else {
      this.userService.createUser(userPayload).subscribe(() => {
        alert('User created successfully');
        this.userForm.reset();
        this.router.navigate(['/']);
      });
    }
  }
}
