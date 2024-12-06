import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincomComponent } from './maincom.component';

describe('MaincomComponent', () => {
  let component: MaincomComponent;
  let fixture: ComponentFixture<MaincomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
