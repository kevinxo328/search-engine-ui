import { AppThemeToggle } from "@/components/App/AppThemeToggle";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

const Home = () => {
  const handleForm = async (form: FormData) => {
    "use server";
    const q = form.get("search");
    if (!q) return;
    redirect(`/search/${q}`);
  };

  return (
    <main className="w-full h-screen min-h-screen max-h-screen overflow-hidden relative p-10">
      <div className="fixed top-10 right-10">
        <AppThemeToggle />
      </div>
      <div className="h-full flex flex-col space-y-6 justify-center items-center">
        <h1 className="sm:text-5xl text-2xl">Search Engine</h1>
        <form action={handleForm} className="block w-full max-w-[500px]">
          <Input
            className="w-full"
            placeholder="請輸入搜尋文字"
            type="text"
            name="search"
          />
        </form>
      </div>
    </main>
  );
};

export default Home;
