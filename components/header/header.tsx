import { Separator } from "@/components/ui/separator";

export function Header() {
  return (
    <header className="flex justify-center items-center gap-3 overflow-hidden mt-5 px-5">
      <Separator
        orientation="horizontal"
        className="data-[orientation=horizontal]:w-[40%] bg-foreground"
      />

      <div
        className="bg-foreground hover:bg-background
          text-card font-bold hover:text-card-foreground
          flex items-center justify-center gap-2
          border border-border rounded-full
          transition ease-in
          cursor-pointer
          h-20 w-20"
      >
        MENU
      </div>

      <Separator
        orientation="horizontal"
        className="data-[orientation=horizontal]:w-[40%] bg-foreground"
      />
    </header>
  );
}
