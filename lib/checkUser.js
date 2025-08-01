// At the top of your server component or server action file
"use server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser(); // <-- FIXED

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0]?.emailAddress ?? "",
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};