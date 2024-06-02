import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DopTaskComponent } from './dop-task.component';

describe('DopTaskComponent', () => {
  let component: DopTaskComponent;
  let fixture: ComponentFixture<DopTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DopTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DopTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
