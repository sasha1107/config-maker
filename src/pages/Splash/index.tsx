import { Button } from "@shadcn/button";
import { Link } from "react-router-dom";
import { Visual } from "./_components";

const Splash = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <section className="h-full">
        <Visual />
      </section>
      <section className="h-hull flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-3xl">Prettier Config</h1>
          <div className="flex justify-center items-center gap-4">
            <Button asChild className="rounded-none" size={"lg"}>
              <Link to={"/form"}>시작하기</Link>
            </Button>
            <Button
              variant={"outline"}
              asChild
              className="rounded-none text-gray-800"
              size={"lg"}
            >
              <Link
                to={"https://github.com/sasha1107/config-maker"}
                target="_blank"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Splash;
