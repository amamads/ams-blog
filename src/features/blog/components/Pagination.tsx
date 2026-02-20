import { Small } from "@/shared/components/Typography";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/shared/ui/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

function getPages(pageCount: number, currentPage: number) {
  return [1, 2, 3, 0, 8, 9, 10];
  let pages: number[] = [];
  if (pageCount <= 5) return Array.from({ length: pageCount }, (_, i) => i + 1);
  else if (currentPage < 4) pages = [1, 2, 3, 4, 0, pageCount];
  else if (currentPage < pageCount - 2)
    pages = [1, 0, currentPage - 1, currentPage, currentPage + 1, 0, pageCount];
  else pages = [1, 0, pageCount - 3, pageCount - 2, pageCount - 1, pageCount];

  return pages;
}

const PaginationBtns = ({
  //   table,
  pageDetails: { pageCount, currentPage },
}: {
  //   table: TableType<Task>;
  pageDetails: { pageCount: number; currentPage: number };
}) => {
  const pages = getPages(pageCount, currentPage);
  return (
    <Pagination>
      <PaginationContent className="flex-col gap-5 md:flex-row md:justify-between md:w-full">
        <PaginationItem>
          <Button
            variant="ghost"
            className="rounded-lg"
            // onClick={() => table?.previousPage()}
            // disabled={!table?.getCanPreviousPage()}
          >
            {/* <ChevronLeftIcon className="size-4" /> */}

            <ArrowLeft className="size-5" />
            <Small>Previous</Small>
          </Button>
        </PaginationItem>
        <div className="flex">
          {pages.map((pageNum, i) => {
            if (pageNum === 0)
              return (
                <PaginationItem key={`${pageNum} ${i}`}>
                  <Button variant="ghost" size="icon">
                    <Small>...</Small>
                  </Button>
                </PaginationItem>
              );
            return (
              <PaginationItem key={`${pageNum} ${i}`}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-lg",
                    currentPage === pageNum &&
                      "bg-secondary-foreground text-secondary dark:bg-primary! dark:text-primary-foreground",
                  )}
                  // onClick={() => table?.setPageIndex(pageNum - 1)}
                >
                  {pageNum}
                </Button>
              </PaginationItem>
            );
          })}
        </div>
        <PaginationItem>
          <Button
            variant="ghost"
            className="rounded-lg"
            // onClick={() => table?.nextPage()}
            // disabled={!table?.getCanNextPage()}
          >
            <Small>Next</Small>
            <ArrowRight className="size-5" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBtns;
