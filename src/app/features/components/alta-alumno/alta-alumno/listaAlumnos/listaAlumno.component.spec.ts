import { ComponentFixture, TestBed } from '@angular/core/testing';
import { listaAlumnoComponent } from './listaAlumno';

describe('AltaAlumnoComponent', () => {
  let component: listaAlumnoComponent;
  let fixture: ComponentFixture<listaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listaAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(listaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
