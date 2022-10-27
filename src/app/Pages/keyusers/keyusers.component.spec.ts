import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyusersComponent } from './keyusers.component';

describe('KeyusersComponent', () => {
  let component: KeyusersComponent;
  let fixture: ComponentFixture<KeyusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
