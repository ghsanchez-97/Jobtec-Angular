import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GjtComponent } from './gjt.component';

describe('GjtComponent', () => {
  let component: GjtComponent;
  let fixture: ComponentFixture<GjtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GjtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GjtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
