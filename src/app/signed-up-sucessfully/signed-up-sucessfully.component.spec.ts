import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedUpSucessfullyComponent } from './signed-up-sucessfully.component';

describe('SignedUpSucessfullyComponent', () => {
  let component: SignedUpSucessfullyComponent;
  let fixture: ComponentFixture<SignedUpSucessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignedUpSucessfullyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignedUpSucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
