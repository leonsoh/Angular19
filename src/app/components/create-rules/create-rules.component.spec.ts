import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRulesComponent } from './create-rules.component';

describe('CreateRulesComponent', () => {
  let component: CreateRulesComponent;
  let fixture: ComponentFixture<CreateRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
