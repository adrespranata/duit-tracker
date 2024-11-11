"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import {
  CreateCategorySchema,
  CreateCategorySchemaType,
  DeleteCategorySchema,
  DeleteCategorySchemaType,
} from "@/schema/categories";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parseBody = CreateCategorySchema.safeParse(form);
  if (!parseBody.success) {
    throw new Error("Bad Request");
  }

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const { name, icon, type } = parseBody.data;
  return await prisma.category.create({
    data: {
      userId: user.id,
      name,
      icon,
      type,
    },
  });
}

export async function DeleteCategory(form: DeleteCategorySchemaType) {
  const parseBody = DeleteCategorySchema.safeParse(form);
  if (!parseBody.success) {
    throw new Error("Bad Request");
  }

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  return await prisma.category.delete({
    where: {
      name_userId_type: {
        userId: user.id,
        name: parseBody.data.name,
        type: parseBody.data.type,
      },
    },
  });
}
