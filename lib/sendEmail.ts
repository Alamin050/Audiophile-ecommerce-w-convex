"use server";

import nodemailer from "nodemailer";

interface SendOrderEmailParams {
  to: string;
  name: string;
  orderId: string;
  items: { name: string; quantity: number; price: number }[];
  totals: { subtotal: number; shipping: number; vat: number; grandTotal: number };
  baseUrl: string;
}

export async function sendOrderConfirmationEmail({
  to,
  name,
  orderId,
  items,
  totals,
  baseUrl,
}: SendOrderEmailParams) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // or "smtp.zoho.com"
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemsHtml = items
    .map(
      (item) =>
        `<p>${item.name} (x${item.quantity}) - $${item.price.toLocaleString()}</p>`
    )
    .join("");

  const html = `
    <h1>Hi ${name},</h1>
    <p>Thank you for your order! Your order ID is <b>${orderId}</b>.</p>
    <h2>Order Summary:</h2>
    ${itemsHtml}
    <p><strong>Subtotal:</strong> $${totals.subtotal.toLocaleString()}</p>
    <p><strong>Shipping:</strong> $${totals.shipping.toLocaleString()}</p>
    <p><strong>VAT:</strong> $${totals.vat.toLocaleString()}</p>
    <h3>Grand Total: $${totals.grandTotal.toLocaleString()}</h3>
    <br/>
    <a href="${baseUrl}/order/${orderId}" 
       style="background:#000;color:#fff;padding:10px 15px;border-radius:6px;text-decoration:none;">
      View your order
    </a>
    <p>Thank you for shopping with us!</p>
  `;

  await transporter.sendMail({
    from: `"Audiophile" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Order Confirmation #${orderId}`,
    html,
  });
}
