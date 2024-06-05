import { CreateCategoryUseCase } from '@/useCases/CreateCategoryUseCase';
import { CreateProductUseCase } from '@/useCases/CreateProductUseCase';
import { CreateSupplierUseCase } from '@/useCases/CreateSupplierUseCase';
import { DeleteProductUseCase } from '@/useCases/DeleteProductUseCase';
import { UpdateProductUseCase } from '@/useCases/UpdateProductUseCase';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateProductController } from './CreateProductController';
import { CreateSupplierController } from './CreateSupplierController';
import { DeleteProductController } from './DeleteProductController';
import { UpdateProductController } from './UpdateProductController';

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
