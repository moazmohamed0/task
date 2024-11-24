import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiuserService } from '../apiuser.service';
import { NgForm } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit  {
  toastMessage: string = '';
  // isDarkMode: boolean = false;

  // ProductId : string = ''
  ProductId: string = '';
  productType: string = 'Chair';
  sizeType: string = 'Small Size';
  ratingType: string = '1';
  Productname: string = '';
  price: string = '';
  image: any = '';
  description: string = '';

  constructor(private apiService: ApiuserService) { }

  ngOnInit(): void {
    // Check if dark mode is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  // toggleDarkMode(): void {
  //   document.documentElement.classList.toggle('dark');
  //   this.isDarkMode = !this.isDarkMode;
  //   localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  // }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0]; // Get the selected file
    this.image = file; // Store it in the component
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = new FormData();

      formData.append('type', this.productType);
      formData.append('size', this.sizeType);
      formData.append('rating', this.ratingType);
      formData.append('name', this.Productname);
      formData.append('price', this.price);
      formData.append('description', this.description);
      formData.append('image', this.image);

      console.log('Form Data:', formData);

      if (this.ProductId) {
        console.log('ProductId:', this.ProductId);
        // If `productId` exists, call the editProduct API
        this.apiService.editproduct(this.ProductId, formData).subscribe(
          response => {
            console.log('Product updated successfully', response);
            this.showToastMessage('Product updated successfully!');
            setInterval(() => {
              window.location.reload();
            }, 2500);
          },
          error => {
            console.error('Error updating product', error);
            this.showToastMessage(`Error: ${error.message}`);
          }
        );
      } else {
        // If no `productId`, call the addProduct API
        this.apiService.addProduct(formData).subscribe(
          response => {
            console.log('Product added successfully', response);
            this.showToastMessage('Product added successfully!!');
            setInterval(() => {
              window.location.reload();
            }, 2500);
          },
          error => {
            console.error('Error adding product', error);
            this.showToastMessage(`Error: ${error.message}`);
          }
        );
      }
    }
  }


  oneditproduct(): void {
    // Prompt for Product ID
    const ProductId = prompt('Please enter the Product ID:');
    if (ProductId) {
      this.apiService.getAllproducts().subscribe(
        (productData: any[]) => {
          const product = productData.find(p => p._id === ProductId);
          if (product) {
            this.ProductId = product._id;
            this.productType = product.type; // Assuming product.productType maps to productType
            this.sizeType = product.size; // Adjust based on your data structure
            this.ratingType = product.rating; // Adjust based on your data structure
            this.Productname = product.name; // Assuming product.Productname exists
            this.price = product.price; // Assuming product.price exists
            this.image = product.image;
            this.description = product.description;

            // Show a success message
            this.showToastMessage('Product loaded successfully for editing!');
          } else {
            this.showToastMessage(`No product found with ID: ${ProductId}`);
          }
        },
        (error) => {
          console.error('Error fetching products:', error);
          this.showToastMessage(`Error fetching products: ${error.message}`);
        }
      );
    } else {
      this.showToastMessage('No ID provided.');
    }
  }

  deleteproduct() {
    const promptMsg = prompt("Please enter the Product ID of the product to delete:");
    if (promptMsg) {
      this.apiService.deleteproduct(promptMsg).subscribe(
        response => {
          console.log('Product deleted successfully', response);
          this.showToastMessage('Product deleted successfully!');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        error => {
          console.error('Error deleting product', error);
          this.showToastMessage(`Error: ${error.message}`);
        }
      );
    }
  }

  deleteAllproducts() {
    const confirmDelete = confirm("Are you sure you want to delete all products? This action cannot be undone.");
    if (confirmDelete) {
      const password = prompt("Please enter your password to confirm:");

      if (password) {
        this.apiService.deleteAllproducts(password).subscribe(
          response => {
            console.log('All products deleted successfully', response);
            this.showToastMessage('All products deleted successfully!');
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          },
          error => {
            console.error('Error deleting all products', error);
            this.showToastMessage(`Error: ${error.message}`);
          }
        );
      }
    }
  }

  showToast() {
    const toastEl = document.getElementById('toast-warning');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  closeToast() {
    const toastEl = document.getElementById('toast-warning');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.hide();
    }
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast();

    setTimeout(() => {
      this.closeToast();
    }, 3000);
  }

}
