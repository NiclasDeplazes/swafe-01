import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { FormsModule } from '@angular/forms';
import { TransactionRoutingModule } from './transaction-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TransactionFilterPipe } from '../pipes/transaction-filter.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    TransactionOverviewComponent,
    TransactionAddComponent,
    TransactionFilterPipe,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    TransactionListComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    NgxMaskModule,
  ],
})
export class TransactionModule { }
