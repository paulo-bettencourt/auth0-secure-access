import {Component, Inject} from '@angular/core';
import {User} from '../../../interfaces/user.interface'
import {ApiService} from "../../../services/api.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  token!: string;
  animal!: string;
  name!: string;
  termsAndConditions: boolean = true;

  constructor(private _service: ApiService, public dialog: MatDialog) {
    // @ts-ignore
    this.token = localStorage.getItem('token');
  }

  submitTermsAndConditions() {
    this._service.submitTermsAndConditions(this.token).subscribe({
      next: () => {
          this.openDialog();
      }
    })
  }

  openDialog(): void {
    this.termsAndConditions = false;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.animal = result;
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
