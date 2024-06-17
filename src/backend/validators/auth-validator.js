const z = require('zod')

//  create a object schema
const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Name must be of atleast 3 characters" })
        .max(255, { message: "Name must not be more than 255 characteres" }),
    username: z
        .string({ required_error: "username is required" })
        .trim()
        .min(3, { message: "Username must be of atleast 3 characters" })
        .max(255, { message: "Username must not be more than 255 characteres" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Email is required" })
        .min(3, { message: "Email must be of atleast 3 characters" })
        .max(255, { message: "Email must not be more than 255 characteres" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be of atleast 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characteres" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be of atleast 6 characters" })
        .max(1024, { message: "Password must not be more than 1024 characteres" }),
    isAdmin: z
        .boolean()
        .required({ message: "Privilages not defined" }),
})
const loginSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "email is required" })
        .min(3, { message: "email must be of atleast 3 characters" })
        .max(255, { message: "email must not be more than 255 characteres" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be of atleast 6 characters" })
        .max(1024, { message: "Password must not be more than 1024 characteres" })
})

module.exports = { registerSchema, loginSchema };