import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
funcionario: any;
saveFuncionario(_t12: NgForm) {
throw new Error('Method not implemented.');
}
  formFuncionario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Funcionario());
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formFuncionario.value);
  
    // chamando a função createForm para limpar os campos na tela
    this.createForm(new Funcionario());
  }
  createForm(funcionario: Funcionario) {
    this.formFuncionario =  new FormGroup({
      id: new FormControl (funcionario.id),
      nome: new FormControl (funcionario.nome),
      tipo:new FormControl(funcionario.tipo),
      cpf: new FormControl (funcionario.cpf),
      email: new FormControl (funcionario.email),
      telefone: new FormControl (funcionario.telefone),
      endereco: new FormControl (funcionario.endereco),
      numero: new FormControl (funcionario.numero),
      cidade: new FormControl (funcionario.cidade),
      uf: new FormControl (funcionario.uf),
      cep: new FormControl (funcionario.cep),
      dataNascimento: new FormControl (funcionario.dataNascimento)
    })
  }
}
