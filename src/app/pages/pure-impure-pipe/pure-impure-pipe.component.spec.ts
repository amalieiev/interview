import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureImpurePipeComponent } from './pure-impure-pipe.component';

describe('PureImpurePipeComponent', () => {
  let component: PureImpurePipeComponent;
  let fixture: ComponentFixture<PureImpurePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureImpurePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureImpurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
