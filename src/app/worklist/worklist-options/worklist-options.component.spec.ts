import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistOptionsComponent } from './worklist-options.component';

describe('WorklistOptionsComponent', () => {
  let component: WorklistOptionsComponent;
  let fixture: ComponentFixture<WorklistOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklistOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklistOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
