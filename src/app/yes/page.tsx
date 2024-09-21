"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ConfirmationPageProps {
  option: number;
}

/**
 * @param props - The props of the confirmation page component.
 * @param props.option The option number that the user has chosen.
 * @returns The confirmation page component.
 */
export default function ConfirmationPage(props: ConfirmationPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-yellow-400 via-red-500 to-purple-600">
      <Card className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white/80 shadow-lg">
        <CardHeader className="relative text-center">
          <Image
            src="/curtain.png"
            alt="Theater Curtain"
            width={500}
            height={200}
            className="h-40 w-full object-cover"
          />
          <CardTitle className="mt-4 text-4xl font-extrabold text-red-900 drop-shadow-lg">
            Thank You for Your Vote!
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <p className="text-xl text-gray-800">
            You have chosen{" "}
            <span className="font-semibold text-red-700">
              Option {props.option}
            </span>{" "}
            in the theater question.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
