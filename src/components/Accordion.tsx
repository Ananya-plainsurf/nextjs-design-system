"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = React.useState('0px');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const node = contentRef.current?.parentElement;
    if (!node) return;
    const observer = new MutationObserver(() => {
      if (node.getAttribute('data-state') === 'open') {
        setOpen(true);
        setMaxHeight(contentRef.current ? contentRef.current.scrollHeight + 'px' : '1000px');
      } else {
        setOpen(false);
        setMaxHeight('0px');
      }
    });
    observer.observe(node, { attributes: true, attributeFilter: ['data-state'] });
    // Set initial state
    if (node.getAttribute('data-state') === 'open') {
      setOpen(true);
      setMaxHeight(contentRef.current ? contentRef.current.scrollHeight + 'px' : '1000px');
    } else {
      setOpen(false);
      setMaxHeight('0px');
    }
    return () => observer.disconnect();
  }, []);

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm transition-all",
        className
      )}
      {...props}
    >
      <div
        ref={contentRef}
        className={cn("pt-0 pb-4")}
        style={{
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          maxHeight,
        }}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
