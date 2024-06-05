import { CreateCategoryUseCase } from '@/useCases/CreateCategoryUseCase';
import { CreateCategoryController } from './CreateCategoryController';

const createCategoryUseCase = new CreateCategoryUseCase();
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
);

export { createCategoryController };
