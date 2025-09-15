import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NavMenuHeader } from "../nav/navMenuHeader";

export function DrawerMenu() {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button
          className="!bg-foreground hover:!bg-background
          !text-card font-bold hover:!text-card-foreground
          flex items-center justify-center gap-2
          border border-border rounded-full
          transition ease-in
          cursor-pointer
          h-20 w-20"
          variant="outline"
        >
          Menu
        </Button>
      </DrawerTrigger>
      <DrawerTitle className="hidden"></DrawerTitle>
      <DrawerContent className="bg-foreground">
        <div className="flex mx-auto items-center w-full h-36 max-w-md">
          <NavMenuHeader />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
