import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeMapComponent } from './crime-map.component';

describe('CrimeMapComponent', () => {
  let component: CrimeMapComponent;
  let fixture: ComponentFixture<CrimeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimeMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
