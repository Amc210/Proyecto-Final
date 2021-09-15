import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAmigosComponent } from './ver-amigos.component';

describe('VerAmigosComponent', () => {
  let component: VerAmigosComponent;
  let fixture: ComponentFixture<VerAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAmigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
