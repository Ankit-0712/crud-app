import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { techStack } from '../Model/techStack';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TechStackService } from '../services/tech-stack-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './newform.html',
  styleUrls: ['./newform.scss'],
})
export class Newform implements OnInit {

  techForm!: FormGroup;
  techStacks: techStack[] = [];
  duplicateError = false;

  @Output()
  techAdded = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private techService: TechStackService) {}

  ngOnInit() {
    this.initializeForm();
    this.loadTechStacks();
  }

  private initializeForm() {
    this.techForm = this.fb.group({
      tech_name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[A-Za-z][A-Za-z ]*$/)
        ]
      ]
    });
  }

  private loadTechStacks() {
    this.techService.getTechStacks().subscribe({
      next: (data) => {
        this.techStacks = data;
      }
    });
  }

  submit() {
    if (this.techForm.invalid) {
      this.techForm.markAllAsTouched();
      return;
    }

    const enteredName = this.techForm.value.tech_name.trim().toLowerCase();
    const duplicate = this.techStacks.some(
      (t) => t.tech_name.toLowerCase() === enteredName
    );

    if (duplicate) {
      this.duplicateError = true;
      return;
    }

    this.duplicateError = false;

    this.techService.addTechStack(this.techForm.value).subscribe(() => {
      alert('Tech Stack added successfully'); 
      this.techAdded.emit();
      this.techForm.reset();
      this.loadTechStacks();
    });
  }

  get techName() {
    return this.techForm.get('tech_name');
  }
}
