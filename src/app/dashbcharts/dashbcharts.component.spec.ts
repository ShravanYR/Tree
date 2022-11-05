import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbchartsComponent } from './dashbcharts.component';

describe('DashbchartsComponent', () => {
  let component: DashbchartsComponent;
  let fixture: ComponentFixture<DashbchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
