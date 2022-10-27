import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemaisacoesComponent } from './demaisacoes.component';

describe('DemaisacoesComponent', () => {
  let component: DemaisacoesComponent;
  let fixture: ComponentFixture<DemaisacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemaisacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemaisacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
