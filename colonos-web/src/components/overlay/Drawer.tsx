import React, { ReactNode } from "react";
import {
  Drawer as ShadDrawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { Button } from "../button/Button";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  withCloseButton?: boolean;
};

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpenChange,
  title,
  children,
  footer,
  direction = "right",
  withCloseButton = true,
  description,
}) => (
  <ShadDrawer open={open} onOpenChange={onOpenChange} direction={direction}>
    <DrawerContent className="min-w-150">
      <DrawerHeader>
        <DrawerTitle className=" text-center text-xl text-primary">
          {title}
        </DrawerTitle>
        <DrawerDescription className="text-center text-sm text-neutral-300">
          {description}
        </DrawerDescription>
      </DrawerHeader>

      {children}
      <DrawerFooter>
        {footer}
        {withCloseButton && (
          <DrawerClose asChild>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-full"
              color="primary"
            >
              Fechar
            </Button>
          </DrawerClose>
        )}
      </DrawerFooter>
    </DrawerContent>
  </ShadDrawer>
);
