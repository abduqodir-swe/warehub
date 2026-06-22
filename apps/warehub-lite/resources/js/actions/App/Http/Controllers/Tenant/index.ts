import DashboardController from './DashboardController'
import ProductController from './ProductController'
import WarehouseController from './WarehouseController'
import CategoryController from './CategoryController'
import StockController from './StockController'
import IncomingDocumentController from './IncomingDocumentController'
import OutgoingDocumentController from './OutgoingDocumentController'
import ReportController from './ReportController'

const Tenant = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    ProductController: Object.assign(ProductController, ProductController),
    WarehouseController: Object.assign(WarehouseController, WarehouseController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    StockController: Object.assign(StockController, StockController),
    IncomingDocumentController: Object.assign(IncomingDocumentController, IncomingDocumentController),
    OutgoingDocumentController: Object.assign(OutgoingDocumentController, OutgoingDocumentController),
    ReportController: Object.assign(ReportController, ReportController),
}

export default Tenant