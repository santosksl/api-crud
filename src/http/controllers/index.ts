import { CreateCategoryUseCase } from '@/useCases/CreateCategoryUseCase';
import { CreateProductUseCase } from '@/useCases/CreateProductUseCase';
import { CreateSupplierUseCase } from '@/useCases/CreateSupplierUseCase';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateProductController } from './CreateProductController';
import { CreateSupplierController } from './CreateSupplierController';

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

export {
    createCategoryController,
    createProductController,
    createSupplierController,
};
