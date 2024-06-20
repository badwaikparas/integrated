const z = require('zod');

// Zod validator for account schema
const accountSchema = z.object({
    id: z.number()
        .positive({ message: "ID must be a positive number" })
        .int({ message: "ID must be an integer" })
        .nonnegative({ message: "ID cannot be negative" })
        .gt(0, { message: "ID must be greater than 0" })
        .required({ message: "ID is required" }),
    name: z.string()
        .trim()
        .nonempty({ message: "Name cannot be empty" })
        .max(255, { message: "Name must not exceed 255 characters" }),
    type: z.number()
        .int({ message: "Type must be an integer" })
        .required({ message: "Type is required" }),
    bankName: z.string()
        .trim()
        .max(255, { message: "Bank Name must not exceed 255 characters" })
        .optional(),
    branchbank: z.string()
        .trim()
        .max(255, { message: "Branch Bank must not exceed 255 characters" })
        .optional(),
    account: z.string()
        .trim()
        .max(255, { message: "Account must not exceed 255 characters" })
        .optional(),
    iban: z.string()
        .trim()
        .max(255, { message: "IBAN must not exceed 255 characters" })
        .optional(),
    status_id: z.number()
        .int({ message: "Status ID must be an integer" })
        .required({ message: "Status ID is required" })
});

module.exports = { accountSchema };
