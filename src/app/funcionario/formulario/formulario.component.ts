
import { FormGroup, FormControl } from '@angular/forms'
import { Funcionario } from '../funcionario';
import { NgForm } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  funcionario = {} as Funcionario;
  funcionarios!: Funcionario[];
  
  
  formFuncionario!: FormGroup;

  constructor(private funcionarioService: FuncionarioService){}

ngOnInit(){
  this.createForm(new Funcionario());
  this.getfuncionarios();
  
}
  createForm(arg0: Funcionario) {
    throw new Error('Method not implemented.');
  }
  getfuncionarios() {
    throw new Error('Method not implemented.');
  }
// defini se um funcionario será criado ou atualizado
saveFuncionario(form: NgForm) {
  if (this.funcionario.id !== undefined) {
    this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
      this.cleanForm(form);
    });
  } else {
    this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
      this.cleanForm(form);
    });
  }
}
    // Chama o serviço para obtém todos os funcionarios
    getFuncionarios() {
      this.funcionarioService.getFuncionarios().subscribe((funcionarios: Funcionario[]) => {
        this.funcionarios = funcionarios;
      });
    }
    // deleta um funcionario
  deleteFuncionario(funcionario: Funcionario) {
    this.funcionarioService.deleteFuncionario(this.funcionario).subscribe(() => {
      this.getFuncionarios();
    });
  }
  // copia o funcionario para ser editado.
  editFuncionario(funcionario: Funcionario) {
    this.funcionario = { ...this.funcionario };
  }
    // limpa o formulario
    cleanForm(form: NgForm) {
      this.getFuncionarios();
      form.resetForm();
      this.funcionario = {} as Funcionario;
    }
    onSubmit(){
      console.log(this.formFuncionario.value)
    }
  }
  
