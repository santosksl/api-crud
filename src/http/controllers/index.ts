import { CreateCategoryUseCase } from '@/useCases/CreateCategoryUseCase';
import { CreateProductUseCase } from '@/useCases/CreateProductUseCase';
import { CreateSupplierUseCase } from '@/useCases/CreateSupplierUseCase';
import { DeleteProductUseCase } from '@/useCases/DeleteProductUseCase';
import { UpdateProductUseCase } from '@/useCases/UpdateProductUseCase';

import { CreateCategoryController } from './category/CreateCategoryController';
import { CreateProductController } from './product/CreateProductController';
import { DeleteProductController } from './product/DeleteProductController';
import { UpdateProductController } from './product/UpdateProductController';
import { CreateSupplierController } from './supplier/CreateSupplierController';

const createCategoryUseCase = new CreateCategoryUseCase();
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
);

const createSupplierUseCase = new CreateSupplierUseCase();
const createSupplierController = new CreateSupplierController(
    createSupplierUseCase,
);

const createProductUseCase = new CreateProductUseCase();
const createProductController = new CreateProductController(
    createProductUseCase,
);

const deleteProductUseCase = new DeleteProductUseCase();
const deleteProductController = new DeleteProductController(
    deleteProductUseCase,
);

const updateProductUseCase = new UpdateProductUseCase();
const updateProductController = new UpdateProductController(
    updateProductUseCase,
);

export {
    createCategoryController,
    createProductController,
    createSupplierController,
    deleteProductController,
    updateProductController,
};
