import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FakestoreapiserviceService } from '../services/fakestoreapiservice.service';

@Component({
  selector: 'app-produto-detalhes',
  standalone: true,
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class ProdutoDetalhesComponent implements OnInit {
  produtoId: string = '';
  produtoSelecionado: any = null;

  constructor(
    private route: ActivatedRoute,
    private fakeStoreApiService: FakestoreapiserviceService
  ) {}

  ngOnInit() {
    this.produtoId = this.route.snapshot.paramMap.get('id') || '';
    if (this.produtoId) {
      this.fakeStoreApiService.getProductById(Number(this.produtoId)).subscribe(
        (produto) => {
          this.produtoSelecionado = produto;
        },
        (error) => {
          console.error('Erro ao buscar produto:', error);
        }
      );
    }
  }
}
