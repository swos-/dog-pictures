import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPictureComponent } from './dog-picture.component';

describe('DogPictureComponent', () => {
  let component: DogPictureComponent;
  let fixture: ComponentFixture<DogPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
