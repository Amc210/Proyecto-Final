import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testhijo2Component } from './testhijo2.component';

describe('Testhijo2Component', () => {
  let component: Testhijo2Component;
  let fixture: ComponentFixture<Testhijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testhijo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testhijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
