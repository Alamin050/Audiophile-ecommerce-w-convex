import { action } from "./_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

export const sendOrderConfirmationEmail = action({
  args: {
    customerEmail: v.string(),
    customerName: v.string(),
    orderId: v.id("orders"),
    orderDetails: v.any(),
    baseUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const html = `
      <h1>Hi ${args.customerName}</h1>
      <p>Thank you for your order #${args.orderId}.</p>
      <p>Total: $${args.orderDetails.totals.grandTotal.toLocaleString()}</p>
      <p><a href="${args.baseUrl}/order/${args.orderId}">View your order</a></p>
    `;

    await transporter.sendMail({
      from: `"Audiophile" <${process.env.EMAIL_USER}>`,
      to: args.customerEmail,
      subject: `Order Confirmation #${args.orderId}`,
      html,
    });
  },
});
