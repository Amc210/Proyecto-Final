import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreContenidoComponent } from './sobre-contenido.component';

describe('SobreContenidoComponent', () => {
  let component: SobreContenidoComponent;
  let fixture: ComponentFixture<SobreContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
