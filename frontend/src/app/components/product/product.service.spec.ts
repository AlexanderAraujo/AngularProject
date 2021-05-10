import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let matSnackBarMock: any = jasmine.createSpyObj(['open']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MatSnackBar, useValue: matSnackBarMock}
      ]
    });
    service = TestBed.inject(ProductService);
    matSnackBarMock.open.and.returnValue('msg');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
});
