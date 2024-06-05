class CategoryAlreadyExistsError extends Error {
    constructor() {
        super('❌ Category already exists!');
    }
}

export { CategoryAlreadyExistsError };
