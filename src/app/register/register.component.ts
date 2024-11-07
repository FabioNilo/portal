import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//formula abstrata para adiconar validadores que serão usados no password
function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;

    if (val1 === val2) {
      return null;
    }

    return { valuesNotEqual: true };
  };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  form = new FormGroup({
    email : new FormControl('', {
      validators : [Validators.required, Validators.email]
    }),
  passwords: new FormGroup(
    {
      password: new FormControl('',{
        validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl('',{
        validators: [Validators.required, Validators.minLength(6)]
      }),
    },{validators: [equalValues('password','confirmPassword')]}
  ),
    firsName: new FormControl('',{validators:[Validators.required]}),
    lastName: new FormControl('',{validators:[Validators.required]}),
    adress: new FormGroup({
      street: new FormControl('',{validators:[Validators.required]}),
      number: new FormControl('',{validators:[Validators.required]}),
      postalCode: new FormControl('',{validators:[Validators.required]}),
     city: new FormControl('',{validators:[Validators.required]}),
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    role: new FormControl<'student'| 'teacher'| 'employee'|'founder'| 
    'other'>('student', {validators:[Validators.required]} ),
    agree: new FormControl(false, {validators:[Validators.required]}),
  })

  onSubmit(){
    console.log(this.form)
    
  }

  onReset(){
    this.form.reset()
  }

}
