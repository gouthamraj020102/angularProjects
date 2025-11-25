import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedComponentComponent } from './my-shared-component.component';

describe('MySharedComponentComponent', () => {
  let component: MySharedComponentComponent;
  let fixture: ComponentFixture<MySharedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySharedComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySharedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
