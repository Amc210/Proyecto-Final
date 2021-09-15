import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthijoComponent } from './testhijo.component';

describe('TesthijoComponent', () => {
  let component: TesthijoComponent;
  let fixture: ComponentFixture<TesthijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesthijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
