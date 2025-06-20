import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FakestoreapiserviceService } from '../services/fakestoreapiservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(
    private apiService: FakestoreapiserviceService,
    private router: Router
  ) {}

  produtos: any[] = [];
  produtoSelecionado: any = null;

  // Método para selecionar um produto
  selecionarProduto(produto: any) {
    this.produtoSelecionado = produto;
    console.log('Produto selecionado:', this.produtoSelecionado);
  }

  ionViewWillEnter() {
    this.apiService.getAllProducts().subscribe((data: any) => {
      this.produtos = data;
    }, (error) => {
      console.error('Erro ao obter produtos:', error);
    });
  }

  // função para navegar para a página de detalhes do produto
  navegarParaDetalhes(produto: any) {
    this.selecionarProduto(produto);
    this.router.navigate(['tabs/tab1/produto-detalhes', produto.id]);
    console.log('Navegando para detalhes do produto:', produto.id);

 
  }
}
