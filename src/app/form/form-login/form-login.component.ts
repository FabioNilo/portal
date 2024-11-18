import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  erroMessage : string | null = null;
  private onDestroyRef = inject(DestroyRef)
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.erroMessage= null;

    if (this.loginForm.invalid) {
      return;
    }
     this.loading = true;
    
     const apiUrl = 'adicionar Backedn'

     const subscribe = this.http.post(apiUrl,this.loginForm.valid).subscribe({
      next: (response)=>{ console.log('Login bem sucedido',response)},
      error:(erro) =>{ console.log('Erro do login', erro); 
        this.erroMessage = 'Falha ao fazer login, verifique seu email ou senha'},
      complete: ()=> {this.loading = false}
     })

     this.onDestroyRef.onDestroy(()=> {subscribe.unsubscribe()})
   
  }
}
