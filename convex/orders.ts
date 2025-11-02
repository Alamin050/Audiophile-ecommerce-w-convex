import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    customerDetails: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shippingDetails: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    paymentMethod: v.string(),
    eMoneyDetails: v.optional(v.object({
      eMoneyNumber: v.string(),
      eMoneyPin: v.string(),
    })),
    items: v.array(v.object({
      id: v.number(),
      name: v.string(),
      price: v.number(),
      quantity: v.number(),
    })),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      vat: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const order = {
      ...args,
      orderStatus: "pending",
      timestamp: Date.now(),
    };
    await ctx.db.insert("orders", order);
  },
});
