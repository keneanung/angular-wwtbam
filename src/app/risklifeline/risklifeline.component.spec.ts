import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisklifelineComponent } from './risklifeline.component';

describe('RisklifelineComponent', () => {
  let component: RisklifelineComponent;
  let fixture: ComponentFixture<RisklifelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisklifelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisklifelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
