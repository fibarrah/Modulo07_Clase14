import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioHardwareComponent } from './inventario-hardware.component';

describe('InventarioHardwareComponent', () => {
  let component: InventarioHardwareComponent;
  let fixture: ComponentFixture<InventarioHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioHardwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
