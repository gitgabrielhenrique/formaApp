import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  formCadastro: FormGroup;
  constructor(private formbuilder: FormBuilder) {

this.formCadastro = this.formbuilder.group({
nome:['',Validators.compose([Validators.required, Validators.minLength(3)])],
descricao:['',Validators.compose([Validators.required])],
validade:['',Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(8)])],
preco:['',Validators.compose([Validators.required,Validators.minLength(3)])],
 }
);

  }

  ngOnInit() {
  }
  salvarCadastro(){
    console.log('formulario :',this.formCadastro.valid);
  }

}
