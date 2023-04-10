import { Component, OnInit } from "@angular/core";
import { FuncionarioService } from "src/app/services/funcionario.service";
import { Funcionario } from "../funcionario";
import { Router } from "@angular/router";

@Component({
  selector: 'app-listagem-funcionarios',
  templateUrl: './listagem-funcionarios.component.html',
  styleUrls: ['./listagem-funcionarios.component.css']
})
export class ListagemFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private service: FuncionarioService, private router: Router) {

  }
  ngOnInit(): void {
    this.service.getFuncionarios().subscribe((data: Funcionario[]) => {
      console.log(data);
      this.funcionarios = data;
    });
  }

  editFuncionario(funcionario: Funcionario) {
    console.log(funcionario)
    this.router.navigate(['cadastar'])

  }

  deleteFuncionario(funcionario: Funcionario) {
    console.log(funcionario)
    this.service.deleteFuncionario(funcionario).subscribe();
    location.reload(); //recarregar a pagina
  }

}
