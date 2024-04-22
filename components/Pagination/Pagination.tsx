import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


function PaginationComponent() {
  return (
    <Pagination className="text-white font-inter text-[14px] font-bold">
      <PaginationContent>
        <PaginationItem className="bg-buttonBorderGray border-cardBgGray border-2 rounded-md">
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="bg-buttonBorderGray border-cardBgGray border-2 rounded-md">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="bg-buttonBorderGray border-cardBgGray border-2 rounded-md">
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem className="bg-buttonBorderGray border-cardBgGray border-2 rounded-md">
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="bg-buttonBorderGray border-cardBgGray border-2 rounded-md">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="bg-buttonBorderGray border-cardBgGray border-2 rounded-md">
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem className="bg-buttonBorderGray border-cardBgGray border-2 rounded-md">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

  )
}

export default PaginationComponent