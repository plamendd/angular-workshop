import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureDatailsComponent } from './furniture-datails.component';

describe('FurnitureDatailsComponent', () => {
  let component: FurnitureDatailsComponent;
  let fixture: ComponentFixture<FurnitureDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
