export function validProductData(body) {
    // Check if body present
    if (!body) return false

    // check if passed body is object ({})
    if (!(typeof body === 'object' && !Array.isArray(body) && body !== null)) return false

    // check if data types are correct with valid value for them
    if (!((typeof body.name === 'string' && body.name.trim().length > 1) && (typeof body.make === 'string' && body.make.trim().length > 3) && (typeof body.image === 'string' && body.image.trim().length > 10) && (typeof body.description === 'string' && body.description.trim().length > 300) && (typeof body.price === 'number' && body.price >= 0) && (typeof body.quantity === 'number' && body.quantity >= 1))) return false

    // product is valid
    return true
}