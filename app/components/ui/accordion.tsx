"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Check, ChevronDown, LinkIcon } from "lucide-react";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  useState,
  useEffect,
} from "react";
import { cn } from "@/lib/utils";

export const Accordions = forwardRef<
  HTMLDivElement,
  | (Omit<
      AccordionPrimitive.AccordionSingleProps,
      "value" | "onValueChange" | "type"
    > & {
      type?: "single";
    })
  | Omit<AccordionPrimitive.AccordionMultipleProps, "value" | "onValueChange">
>(({ type = "single", className, defaultValue, ...props }, ref) => {
  const [value, setValue] = useState<string | string[]>(
    type === "single"
      ? ((defaultValue as string) ?? "")
      : ((defaultValue as string[]) ?? []),
  );

  useEffect(() => {
    const id = window.location.hash.substring(1);
    if (id.length > 0) {
      setValue((prev) => (typeof prev === "string" ? id : [id, ...prev]));
    }
  }, []);

  const commonProps = {
    ref,
    className: cn("overflow-hidden", className),
    ...props,
  };

  if (type === "multiple") {
    return (
      <AccordionPrimitive.Root
        {...commonProps}
        type="multiple"
        value={value as string[]}
        onValueChange={setValue as (value: string[]) => void}
      />
    );
  }

  return (
    <AccordionPrimitive.Root
      {...commonProps}
      type="single"
      value={value as string}
      onValueChange={setValue as (value: string) => void}
      collapsible
    />
  );
});

Accordions.displayName = "Accordions";

export const Accordion = forwardRef<
  HTMLDivElement,
  Omit<ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, "value"> & {
    title: string;
    triggerClassName?: string;
    triggerStyle?: CSSProperties;
  }
>(
  ({ title, className, triggerClassName, triggerStyle, id, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={id ?? title}
      className={cn("group/accordion relative scroll-m-20", className)}
      {...props}
    >
      <AccordionPrimitive.Header
        id={id}
        className="not-prose flex flex-row items-center font-medium text-foreground"
      >
        <AccordionPrimitive.Trigger
          className={cn(
            "flex w-full flex-1 items-center justify-between gap-4 px-4 py-3 text-start",
            triggerClassName,
          )}
          style={triggerStyle}
        >
          <span className="flex-1">{title}</span>
          <ChevronDown className="h-4 w-4 shrink-0 self-center text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion:rotate-180" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="prose-no-margin px-4 pb-3 pt-0 text-muted-foreground">
          {children}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
  },
);

Accordion.displayName = "Accordion";
