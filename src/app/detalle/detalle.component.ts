import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {}

  getItemData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getItem(+id!).subscribe({
      next: (res) => {
        this.item = res;
      },
      error: (err) => {
        console.log('err :>> ', err);
      },
    });
  }
}
