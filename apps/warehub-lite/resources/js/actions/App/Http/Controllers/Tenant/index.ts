import DashboardController from './DashboardController'
import ProductController from './ProductController'
import WarehouseController from './WarehouseController'
import CategoryController from './CategoryController'
import StockController from './StockController'
import SupplierController from './SupplierController'
import IncomingDocumentController from './IncomingDocumentController'
import CustomerController from './CustomerController'
import OutgoingDocumentController from './OutgoingDocumentController'
import InventoryDocumentController from './InventoryDocumentController'
import TransferDocumentController from './TransferDocumentController'
import ActivityController from './ActivityController'
import ReportController from './ReportController'

const Tenant = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    ProductController: Object.assign(ProductController, ProductController),
    WarehouseController: Object.assign(WarehouseController, WarehouseController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    StockController: Object.assign(StockController, StockController),
    SupplierController: Object.assign(SupplierController, SupplierController),
    IncomingDocumentController: Object.assign(IncomingDocumentController, IncomingDocumentController),
    CustomerController: Object.assign(CustomerController, CustomerController),
    OutgoingDocumentController: Object.assign(OutgoingDocumentController, OutgoingDocumentController),
    InventoryDocumentController: Object.assign(InventoryDocumentController, InventoryDocumentController),
    TransferDocumentController: Object.assign(TransferDocumentController, TransferDocumentController),
    ActivityController: Object.assign(ActivityController, ActivityController),
    ReportController: Object.assign(ReportController, ReportController),
}

export default Tenant