import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthServiceService } from '../services/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: any={};
  hide = true;
  constructor(
    private auth: AuthServiceService,
    private snackbar: MatSnackBar
  ){}

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,]);

  matcher = new MyErrorStateMatcher();

  login = (data: any) => {

    //console.log(data);

    this.auth.procedLogin(data).subscribe((res: any) => {

     if(res.status == 200){
      // alert('success')
      this.snackbar.open(res['mgs'].toString(),'',{
        duration:3000,
        verticalPosition: 'top'
      })
     }else{
      this.snackbar.open(res['mgs'].toString(),'',{
        duration:3000,
        verticalPosition: 'top'
      });
     };
      console.log(res['userData']);
    }); 
  };
};
