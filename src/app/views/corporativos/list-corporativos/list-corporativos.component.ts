import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CorporativosService } from 'app/shared/services/corporativos.service';

@Component({
  selector: 'app-list-corporativos',
  templateUrl: './list-corporativos.component.html',
  styles: [
  ]
})


export class ListCorporativosComponent implements OnInit {


  users:any[] = []

  // @ViewChild(DatatableComponent) table: DatatableComponent;

  // // row data
  public rows = this.users;
  // public ColumnMode = ColumnMode;
  public limitRef = 10;

  // column header
  public columns = [
    { name: "ID", prop: "ID" },
    { name: "Username", prop: "Username" },
    { name: "Name", prop: "Name" },
    { name: "Last Activity", prop: "Last Activity" },
    { name: "Verified", prop: "Verified" },
    { name: "Role", prop: "Role" },
    { name: "Status", prop: "Status" },
    { name: "Actions", prop: "Actions" },
  ];

  // private

  constructor(private cService: CorporativosService, private cd: ChangeDetectorRef) {
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */

  /**
   * updateLimit
   *
   * @param limit
   */
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }

  ngOnInit(): void {
    this.getCorporativos()
  }

  getCorporativos(){
    this.cService.getList().subscribe((res:any) => {
      this.users = res.data.map(item => {
        return {
          ...item,
          url: item.S_SystemUrl = `devschoolcloud.com/sa/#/${item.S_SystemUrl}`
        }
      })
      this.cd.detectChanges()
    }, err => window.alert('Ha ocurrido un error, intente nuevamente'))
  }

}
