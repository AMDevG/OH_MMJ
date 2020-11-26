import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: string;
  userForm: FormGroup;
  user: User;
  private paramSub: any;
  private userSub: any;

  users: User[];

  constructor(private fb: FormBuilder, private fireStoreService: FirestoreService,
    private route: Router, private activeRoute: ActivatedRoute) {

      console.log("User id is: " + this.userId);
      
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      email: ['', Validators.required],
      issueDate:  [''],
      county: ['']
  });
}

// updateInfo(){
//   this.fireStoreService.update(this.userId);
// }
  ngOnInit() {
    this.fireStoreService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ... e.payload.doc.data() as User };
      })
    });
  }

    
      // this.userForm.patchValue({
      //       firstName: this.userSub.firstName,
      //       lastName: this.user.lastName,
      //       email: this.user.email,
      //       issueDate: this.user.issueDate,
      //       county: this.user.county
      //   });
    
    // });
  

}
