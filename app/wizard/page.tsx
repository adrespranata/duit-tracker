import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 py-8 md:px-6 lg:gap-8 lg:px-8">
      <div>
        <h1 className="text-center text-3xl font-semibold">
          Welcome, <span className="ml-2 font-bold">{user.firstName}</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Lets &apos;s get started by setting up your currency
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          You can change these settings at any time
        </h3>
      </div>

      <Separator />

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Choose your currency</CardTitle>
          <CardDescription>Set your default for transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>

      <Separator />

      <Button className="w-full" asChild>
        <Link href={"/"}>I&apos;m done! Take me to the dashboard</Link>
      </Button>

      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
}

export default Page;
