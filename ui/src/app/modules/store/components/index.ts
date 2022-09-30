import { LedgersListComponent } from "./ledgers-list/ledgers-list.component";
import { ManageLedgerComponent } from "./manage-ledger/manage-ledger.component";
import { StockBatchListComponent } from "./stock-batch-list/stock-batch-list.component";
import { StockInOtherUnitsComponent } from "./stock-in-other-units/stock-in-other-units.component";
import { StockOutItemsComponent } from "./stock-out-items/stock-out-items.component";
import { StockStatusListComponent } from "./stock-status-list/stock-status-list.component";
import { TotalizeStockUnitsQuantityComponent } from "./totalize-stock-units-quantity/totalize-stock-units-quantity.component";

export const stockComponents: any[] = [
  StockBatchListComponent,
  StockStatusListComponent,
  StockOutItemsComponent,
  LedgersListComponent,
  ManageLedgerComponent,
  StockInOtherUnitsComponent,
  TotalizeStockUnitsQuantityComponent,
];
