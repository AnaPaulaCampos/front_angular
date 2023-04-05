import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produtos } from './produtos'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  formProduto!: FormGroup;


  constructor(private formBuilder: FormBuilder){}

  ngOnInit()  {
    this.createForm(new Produtos());
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
  
    console.log(this.formProduto.value);
    // chamando a função createForm para limpar os campos na tela
  this.createForm(new Produtos());
  }


  createForm(produto: Produtos) {
    this.formProduto= this.formBuilder.group({
      id: [produto.id],
      nome: [produto.nome],
      descricao: [produto.descricao],
      preco: [produto.preco]
    })
  }

}
