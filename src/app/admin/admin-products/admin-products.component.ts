import { Component, OnInit ,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { product } from '../../product.service';
import { EditServService } from '../../edit-serv.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  public view: Observable<GridDataResult>;
  public gridState: State = {
      sort: [],
      skip: 0,
      take: 10
  };

  public editDataItem: product;
  public isNew: boolean;
  private editService: EditServService;

  constructor(@Inject(EditServService) editServiceFactory: any) {
      this.editService = editServiceFactory();
  }

  public ngOnInit(): void {
      this.view = this.editService.pipe(map(data => process(data, this.gridState)));

      this.editService.read();
  }

  public onStateChange(state: State) {
      this.gridState = state;

      this.editService.read();
  }

  public addHandler() {
      this.editDataItem = new product();
      this.isNew = true;
  }

  public editHandler({dataItem}) {
      this.editDataItem = dataItem;
      this.isNew = false;
  }

  public cancelHandler() {
      this.editDataItem = undefined;
  }

  public saveHandler(product: product) {
      this.editService.save(product, this.isNew);

      this.editDataItem = undefined;
  }

  public removeHandler({dataItem}) {
      this.editService.remove(dataItem);
  }
}
