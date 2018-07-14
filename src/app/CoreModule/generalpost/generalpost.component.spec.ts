import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralpostComponent } from './generalpost.component';

describe('GeneralpostComponent', () => {
  let component: GeneralpostComponent;
  let fixture: ComponentFixture<GeneralpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
