import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <section className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-light text-gray-900">
          {" "}
          Sign in to your account
        </h2>
      </section>
      <AuthForm />
    </main>
  );
}
