class CategoryAlreadyExistsError extends Error {
    constructor() {
        super('❌ Category already exists!');
    }
}

class CategoryDoesNotExistError extends Error {
    constructor() {
        super('❌ This category does not exist!');
    }
}

class SupplierDoesNotExistError extends Error {
    constructor() {
        super('❌ This supplier does not exist!');
    }
}

class SupplierAlreadyExistsError extends Error {
    constructor() {
        super('❌ Supplier already exists!');
    }
}

class ProductAlreadyExistsError extends Error {
    constructor() {
        super('❌ Product already exists!');
    }
}

class ProductDoesNotExistError extends Error {
    constructor() {
        super('❌ This product does not exist!');
    }
}

class InvalidCategoryParamsError extends Error {
    constructor() {
        super('❌ Invalid category parameters!');
    }
}

export {
    CategoryAlreadyExistsError,
    CategoryDoesNotExistError,
    InvalidCategoryParamsError,
    ProductAlreadyExistsError,
    ProductDoesNotExistError,
    SupplierAlreadyExistsError,
    SupplierDoesNotExistError,
};
