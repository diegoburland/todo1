"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../models/productModel"));
class ProductController {
    constructor(DB) {
        this.db = DB;
    }
    all(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productModel = new productModel_1.default(this.db);
            const products = yield productModel.all();
            res.json(products);
        });
    }
    get(req, res) {
        res.send('uno');
    }
    store(req, res) {
        res.send('crear uno');
    }
    update(req, res) {
        res.send('update 1');
    }
    delete(req, res) {
        res.send('delete');
    }
}
exports.default = ProductController;
