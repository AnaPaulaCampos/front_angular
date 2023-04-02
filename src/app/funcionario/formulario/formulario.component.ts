import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from '../funcionario';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 public formCadastroFuncionario!: FormGroup; 
private url = "http://localhost:3000/funcionario";
  constructor(private formBiulder: FormBuilder, private http: HttpClient ){

  }

     ngOnInit(): void {
    this.criarFormulario(new Funcionario())
  }
 
  public criarFormulario(funcionario: Funcionario){

    this.formCadastroFuncionario= this.formBiulder.group({
      nome: funcionario.nome,
      tipo: funcionario.tipo,
      cpf: funcionario.cpf,
      email: funcionario.email,
      telefone: funcionario.telefone,
      endereco: funcionario.endereco,
      numero: funcionario.numero,
      cidade: funcionario.cidade,
      uf: funcionario.UF,
      cep: funcionario.CEP,
      datanascimento: funcionario.dataNascimento

    })

  }
public salvar(){

  console.log(this.formCadastroFuncionario.value);
 this.http.post(this.url)
}

}
