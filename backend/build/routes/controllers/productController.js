"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    all() {
        return 'all';
    }
    getById(id) {
        return 'uno solo';
    }
    store(product) {
        return 'crea uno';
    }
    update(product) {
        return 'actualiza uno';
    }
    delete(id) {
        return 'elimina 1';
    }
}
exports.default = ProductController;
