import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cosif } from 'src/app/models/cosif.model';
import { Product } from 'src/app/models/product.model';
import { CosifService } from 'src/app/services/cosif.service';
import { ManualEntryService } from 'src/app/services/manual-entry.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css'],
})
export class ManualEntryComponent {
  form = this.fb.group({
    entryMonth: ['', Validators.required],
    entryYear: ['', Validators.required],
    entryProductId: ['', Validators.required],
    entryCosif: ['', Validators.required],
    entryAmount: ['', Validators.required],
    entryDescription: ['', Validators.required],
  });

  products: Product[] = [];
  cosifs: Cosif[] = [];
  entries: any[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private cosifService: CosifService,
    private manualEntryService: ManualEntryService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadEntries();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res) => (this.products = res));
  }

  onProductChange(event: Event) {

    const select = event.target as HTMLSelectElement;
    const productId = select.value;

    if (!productId) {
      this.cosifs = [];
      return;
    }

    this.cosifService
      .getCosifByProduct(productId)
      .subscribe((res) => (this.cosifs = res));
  }

  submit() {
    if (this.form.invalid) return;

    // TODO ver tipagem
    this.manualEntryService.create(this.form.value as any).subscribe(() => {
      this.form.reset();
      this.loadEntries();
    });
  }

  loadEntries() {
    this.manualEntryService.list().subscribe((res) => (this.entries = res));
  }
}
