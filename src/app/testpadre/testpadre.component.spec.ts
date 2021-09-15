import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpadreComponent } from './testpadre.component';

describe('TestpadreComponent', () => {
  let component: TestpadreComponent;
  let fixture: ComponentFixture<TestpadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestpadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
