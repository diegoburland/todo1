"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
class ProductRoutes {
    constructor(DBConnection) {
        this.productController = new productController_1.default(DBConnection);
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/products', this.productController.all);
        this.router.get('/products:id', this.productController.get);
        this.router.post('/products', this.productController.store);
        this.router.put('/products:id', this.productController.update);
        this.router.delete('/products:id', this.productController.delete);
    }
}
exports.default = ProductRoutes;
