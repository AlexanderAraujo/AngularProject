import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductService } from '../product.service';

import { ProductCreateComponent } from './product-create.component';

describe('ProductCreateComponent', () => {
  let component: ProductCreateComponent;
  let fixture: ComponentFixture<ProductCreateComponent>;
  let productServiceMock: any = jasmine.createSpyObj(['create']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateComponent ],
      providers: [
        { provide: ProductService, useValue: productServiceMock }],  
      imports: [ RouterTestingModule ]    
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProductCreateComponent);
    component = fixture.componentInstance;
    productServiceMock.create.and.returnValue(of(fakeProduct));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const fakeProduct = {
    id: 1,
    name: 'Fake Product',
    price: 2.50
  };
});
