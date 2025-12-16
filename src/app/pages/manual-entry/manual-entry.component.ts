import { ManualEntry } from './../../models/manual-entry.model';
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
    entryMonth: [
      null,
      [Validators.required, Validators.min(1), Validators.max(12)],
    ],
    entryYear: [
      null,
      [Validators.required, Validators.min(1900), Validators.max(2100)],
    ],
    entryProductId: ['', Validators.required],
    entryCosif: ['', Validators.required],
    entryAmount: [null, [Validators.required, Validators.min(0.01)]],
    entryDescription: ['', [Validators.required, Validators.maxLength(50)]],
  });

  products: Product[] = [];
  cosifs: Cosif[] = [];
  entries: ManualEntry[] = [];
  serverError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private cosifService: CosifService,
    private manualEntryService: ManualEntryService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadEntries();
    this.disableForm()
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res) => (this.products = res));
  }

  disableForm() {
    this.form.disable();
  }

  newEntry() {
    this.form.enable();
    this.resetEntry();
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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.manualEntryService
      .create(this.form.getRawValue() as ManualEntry)
      .subscribe({
        next: (response) => {
          this.resetEntry();
          this.entries.push(response);
          this.disableForm();
          this.serverError = false;
        },
        error: () => this.serverError = true,
        complete: () => this.form.markAsUntouched()
      });
  }

  loadEntries() {
    this.manualEntryService.list().subscribe((res) => (this.entries = res));
  }

  resetEntry() {
    this.serverError = false;
    this.form.reset({
      entryMonth: null,
      entryYear: null,
      entryProductId: '',
      entryCosif: '',
      entryAmount: null,
      entryDescription: '',
    });
    this.form.markAsPristine();
  }
}
