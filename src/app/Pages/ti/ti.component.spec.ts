import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TIComponent } from './ti.component';

describe('TIComponent', () => {
  let component: TIComponent;
  let fixture: ComponentFixture<TIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
