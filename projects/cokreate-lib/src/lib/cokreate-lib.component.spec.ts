import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokreateLibComponent } from './cokreate-lib.component';

describe('CokreateLibComponent', () => {
  let component: CokreateLibComponent;
  let fixture: ComponentFixture<CokreateLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CokreateLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CokreateLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
