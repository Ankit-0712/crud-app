import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newform } from './newform';

describe('Newform', () => {
  let component: Newform;
  let fixture: ComponentFixture<Newform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
