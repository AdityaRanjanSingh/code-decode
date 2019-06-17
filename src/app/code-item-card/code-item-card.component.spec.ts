import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeItemCardComponent } from './code-item-card.component';

describe('CodeItemCardComponent', () => {
  let component: CodeItemCardComponent;
  let fixture: ComponentFixture<CodeItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
