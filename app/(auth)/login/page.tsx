import { LoginForm } from "@/components/form/loginForm";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";

export default function Login() {
  return (
    <>
      <BackgroundGradient />
      <div className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
          <FixedThemeToggle />
        </div>
      </div>
    </>
  );
}
