import { is } from "date-fns/locale";
import {z} from "zod";
export const accountsSchema=z.object({
    name: z.string().min(1, "Name is required"),
    type: z.enum(["CURRENT","SAVINGS"]),
    balance: z.string().min(1,"Initial balance is required"),
    isDefault: z.boolean().default(false),
})