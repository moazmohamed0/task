import { Component } from '@angular/core';
import { ApiuserService } from '../apiuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  Price : string = ''
  size : string = ''
  rating : string = ''
  isArrowReversed = false;
  showFormCheck = true;
  isArrowReversed2 = false;
  showFormCheck2 = true;
  isArrowReversed3 = false;
  showFormCheck3 = true;
  isFilterVisible: boolean = false;
  isMobileView: boolean = false;
  dropdownActive = false;
  selectedOption = 'Select an option'; // Default option
  dropdownOptions = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 }
  ];
  selectedProduct: string = '';
  selectedProduct2: string = '';
  selectedProduct3: string = '';
  selectedProduct4: string = '';
  selectedStarsHtml: string = '';
  clickCount: number = 0;
  products: (string | null)[] = [
    this.selectedProduct,
    this.selectedProduct2,
    this.selectedProduct3,
    this.selectedProduct4,
  ];
  lastIndexToRemove: number = this.products.length - 1;
  addproducts: any[] = [];
  allproduct: any[] = [];
  pagedProducts: any[] = [];
  currentPage: number = 1;
  productsPerPage: number = 9;
  filteredProducts: any[] = [];
  noProductsFound: boolean = false;
  productshowing: string = "0";
    numberofproduct: string = '0'

  constructor(private ApiuserService: ApiuserService, private router: Router) {}

  navigateToFilter(productType: string) {
    this.selectedProduct = productType;
    this.filterProducts();
    this.router.navigate(['/filters']);
  }

  filterProducts() {
    let filteredProducts = this.allproduct;

    if (this.selectedProduct !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.type === this.selectedProduct);
    }

    if (filteredProducts.length === 0) {
      this.noProductsFound = true;
    } else {
      this.noProductsFound = false;
    }

    this.filteredProducts = filteredProducts;
    this.productshowing = String(this.filteredProducts.length);
    this.currentPage = 1;
    this.setPagedProducts();
  }

  setPagedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.pagedProducts = this.filteredProducts.slice(startIndex, endIndex);
    this.updateProductShowing();
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.setPagedProducts();
  }

  updateProductShowing(): void {
    const startIndex = (this.currentPage - 1) * this.productsPerPage + 1;
    const endIndex = Math.min(startIndex + this.productsPerPage - 1, this.filteredProducts.length);
    this.productshowing = `${endIndex}`;
    this.numberofproduct = `${this.filteredProducts.length}`
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setPagedProducts();
    }
  }

  goToNextPage(): void {
    const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.setPagedProducts();
    }
  }

  getTotalPages(): number[] {
    const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
    return Array(totalPages).fill(0).map((_, i) => i + 1); // Generates [1, 2, 3, ..., totalPages]
  }


}
