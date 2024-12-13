"use server";

import { prisma } from "@/prisma/prisma-client";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  await prisma.product.create({
    data: {
      name: formData.get("name") as string,
      imageUrl: "/assets/bag.png",
      rating: 5,
      reviews: 100,
      price: parseFloat(formData.get("price") as string),
      oldPrice: parseFloat(formData.get("price") as string) + 90,
    },
  });
  revalidatePath("/");
}

export async function editProduct(formData: FormData, id: string) {
  await prisma.product.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      price: parseFloat(formData.get("price") as string),
    },
  });
  revalidatePath("/");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });
  revalidatePath("/");
}
