import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  items: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.apiService.getItems().subscribe({
      next: (res) => {
        this.items = res;
      },
      error: (err) => {
        console.log('err :>> ', err);
      },
    });
  }
}
