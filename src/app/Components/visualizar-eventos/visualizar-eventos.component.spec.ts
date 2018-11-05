import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEventosComponent } from './visualizar-eventos.component';

describe('VisualizarEventosComponent', () => {
  let component: VisualizarEventosComponent;
  let fixture: ComponentFixture<VisualizarEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
