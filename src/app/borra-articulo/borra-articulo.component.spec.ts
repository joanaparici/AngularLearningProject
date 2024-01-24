import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorraArticuloComponent } from './borra-articulo.component';

describe('BorraArticuloComponent', () => {
  let component: BorraArticuloComponent;
  let fixture: ComponentFixture<BorraArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorraArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorraArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
