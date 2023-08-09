import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeesComponent } from './pipees.component';

describe('PipeesComponent', () => {
  let component: PipeesComponent;
  let fixture: ComponentFixture<PipeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeesComponent]
    });
    fixture = TestBed.createComponent(PipeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
