exports.getBoundaryValues = (id, quantity) => {
    
    const endValue = quantity * id;
    const startValue = endValue - (quantity-1);

    return {
        startValue, 
        endValue
    }
}