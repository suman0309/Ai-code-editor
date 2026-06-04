import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { signIn } from "@/auth";

async function handleGoogleSignIn() {
  "use server";
  await signIn("google");
}

async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Sign In
        </CardTitle>

        <CardDescription className="text-center">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button type="submit" variant="outline" className="w-full">
            <FcGoogle className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </form>

        <form action={handleGithubSignIn}>
          <Button type="submit" variant="outline" className="w-full">
            <FaGithub className="mr-2 h-4 w-4" />
            Sign in with GitHub
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="w-full text-center text-sm text-gray-500">
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;