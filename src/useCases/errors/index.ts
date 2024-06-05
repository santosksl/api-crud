class CategoryAlreadyExistsError extends Error {
    constructor() {
        super('❌ Category already exists!');
    }
}

class SupplierAlreadyExistsError extends Error {
    constructor() {
        super('❌ E-mail already exists!');
    }
}

export { CategoryAlreadyExistsError, SupplierAlreadyExistsError };
