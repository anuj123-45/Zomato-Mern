import joi from 'joi';

export const validateId = (id) => {
    const Schema = joi.object({
       _id: joi.string().required(),
    })
    return Schema.validateAsync(id);
}

export const validateOrderDetails = (orderDetails) => {
    const Schema = joi.object({
        orderDetails: joi.array().items(
            joi.object({
                food: joi.string().required(), // MongoDB ObjectId (string) expected
                quantity: joi.number().integer().positive().required(), // Positive integer
                paymode: joi.string().valid("Cash", "Card", "UPI", "Net Banking").required(), // Allowed payment modes
                status: joi.string().valid("Placed", "Cancelled", "Delivered").default("Placed"), // Default is "Placed"
                paymentDetails: joi.object({
                    itemTotal: joi.number().positive().required(), // Positive number for itemTotal
                    promo: joi.number().min(0).required(), // Promo discount (min 0)
                    tax: joi.number().min(0).required(), // Tax (min 0)
                }).required(), // paymentDetails is required
            })
        )
    })
    return Schema.validateAsync(orderDetails);
}