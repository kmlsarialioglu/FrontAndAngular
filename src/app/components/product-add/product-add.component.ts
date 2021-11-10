import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({

      categoryId: ["", Validators.required],
      suplierId: ["", Validators.required],
      brandId: ["", Validators.required],
      productCode: ["", Validators.required],
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required]
    })
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
          console.log(responseError.error.Errors)
          this.toastrService.error(responseError.error,
            "Doğrulama Hatası")
          }
        )
      }
    else {
      this.toastrService.error("Form Alanlarını Kontrol Ediniz","Dikkat")
    }
  }
}

