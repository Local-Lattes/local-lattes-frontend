/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NHgnvvENJvn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function NavBar() {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 shadow dark:bg-gray-900">
      <div className="text-lg font-bold text-gray-900 dark:text-gray-50">
        Local Lattes
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
