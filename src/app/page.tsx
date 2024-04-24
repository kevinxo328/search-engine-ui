import { AppThemeToggle } from "@/components/App/AppThemeToggle";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="w-full h-screen min-h-screen max-h-screen overflow-hidden relative p-10">
      <div className="fixed top-10 right-10">
        <AppThemeToggle />
      </div>
      <div className="h-full flex flex-col space-y-6 justify-center items-center">
        <h1 className="sm:text-5xl text-2xl">Search Engine</h1>
        <Input className="max-w-[500px]" placeholder="請輸入搜尋文字" />
      </div>
    </main>
  );
}
