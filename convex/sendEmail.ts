"use node";
import { action } from "./_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

export const sendPurchaseConfirmation = action({
  args: {
    to: v.string(),
    userName: v.string(),
    productName: v.string(),
    amount: v.number(),
    orderId: v.string(),
  },
  handler: async (ctx, args) => {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: args.to,
      subject: `Order Confirmation - ${args.orderId}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background-color: #f9f9f9; }
              .order-details { background-color: white; padding: 15px; margin: 20px 0; border-radius: 5px; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Purchase!</h1>
              </div>
              <div class="content">
                <p>Hi ${args.userName},</p>
                <p>We've received your order and it's being processed. Here are your order details:</p>
                
                <div class="order-details">
                  <h3>Order Details</h3>
                  <p><strong>Order ID:</strong> ${args.orderId}</p>
                  <p><strong>Product:</strong> ${args.productName}</p>
                  <p><strong>Amount:</strong> $${args.amount.toFixed(2)}</p>
                </div>
                
                <p>You'll receive another email once your order ships.</p>
                <p>If you have any questions, feel free to reply to this email.</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Your Company. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("Email error:", error);
      throw new Error("Failed to send email");
    }
  },
});