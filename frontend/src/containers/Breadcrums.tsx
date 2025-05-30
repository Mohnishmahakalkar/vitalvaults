import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface BreadcrumbsProps {
  items?: string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items = [] }) => {
  return (
    <>
      <header className="flex flex-row w-full h-14 shrink-0 items-center gap-2 px-4">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-8"
        />
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem className="hidden md:block">
                  {index < items.length - 1 ? (
                    <BreadcrumbLink href="#">{item}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < items.length - 1 && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex ">
        <Separator orientation="horizontal" className="w-full" />
      </div>
    </>
  );
};

export default Breadcrumbs;
