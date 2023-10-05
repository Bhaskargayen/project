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
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent {
  RegData: any={};
  hide = true;
  constructor(
    private auth: AuthServiceService,
    private snackbar: MatSnackBar,
    private router: Router
  ){}
  name = new FormControl('', [Validators.required,]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,]);
  phone = new FormControl('', [Validators.required,]);
  pin = new FormControl('', [Validators.required,]);
  address = new FormControl('', [Validators.required,]);

  matcher = new MyErrorStateMatcher();
  registation = (data: any) => {

    //console.log(data);

    this.auth.registation(data).subscribe((res: any) => {

     if(res.status == 200){
      this.router.navigate(["/login"]);
      // alert('success')
      this.snackbar.open(res['msg'].toString(),'',{
        duration:3000,
        verticalPosition: 'top'
      })
     }else{
      this.snackbar.open(res['msg'].toString(),'',{
        duration:3000,
        verticalPosition: 'top'
      });
     };
      // console.log(res['userData']);
    }); 
  };
}
