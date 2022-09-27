import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogLinksComponent } from './dog-links.component';

describe('DogLinksComponent', () => {
  let component: DogLinksComponent;
  let fixture: ComponentFixture<DogLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
