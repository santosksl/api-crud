import { CreateCategoryUseCase } from '@/useCases/CreateCategoryUseCase';
import { CreateSupplierUseCase } from '@/useCases/CreateSupplierUseCase';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateSupplierController } from './CreateSupplierController';

const createCategoryUseCase = new CreateCategoryUseCase();
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
);

const createSupplierUseCase = new CreateSupplierUseCase();
const createSupplierController = new CreateSupplierController(
    createSupplierUseCase,
);

export { createCategoryController, createSupplierController };
