'use client'
import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from '@/lib/utils'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  perPage: number
  pagesNum: number
}

function PaginationComponent({
  hasNextPage,
  hasPrevPage,
  perPage,
  pagesNum
}: PaginationControlsProps):  JSX.Element {

  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  const pagesArr = []
  for (let i = 1; i <= pagesNum; i++) {
    pagesArr.push(i)
  }

  function handlePrevPage(page: number): void {
    if (page > 1){
      router.push(`/?page=${page - 1}`, {scroll: false})
    } else if (page < 1) {
      router.push(`/?page=1`, {scroll: false})
    }
  }

  function handleNextPage(page: number): void {
    if (page < pagesNum && page > 0){
      router.push(`/?page=${page + 1}`, {scroll: false})
    } else {
      router.push(`/?page=1`, {scroll: false})
    }
  }

  return (
    <Pagination className="text-white font-inter text-[14px] font-bold">
      <PaginationContent>
        <PaginationItem 
          onClick={() => handlePrevPage(Number(page))} 
          className={cn(!hasPrevPage ? 'cursor-default' : 'cursor-pointer', 
          "bg-buttonBorderGray border-cardBgGray border-2 rounded-md hover:bg-buttonBorderGray")}
        >
          <PaginationPrevious 
            className={cn(!hasPrevPage ? 'text-[#505568] hover:bg-buttonBorderGray hover:text-[#505568]' : 
            'text-white hover:bg-buttonBorderGray hover:text-white hover:border-white hover:border-[1px] rounded-md')}
          />
        </PaginationItem>
        {pagesArr.map((pageNumber,index) => 
          <PaginationItem 
            key={index} 
            className={cn(!hasPrevPage ? 'cursor-default' : 'cursor-pointer', 
            "bg-buttonBorderGray border-cardBgGray border-2 rounded-md hover:bg-buttonBorderGray")}
          >
            <PaginationLink 
              className={cn(Number(page) === pageNumber ? 'hover:bg-buttonBorderGray hover:text-white border-white border-[1px]' : 
              'hover:bg-white ', 
              'text-white hover:border-white hover:border-[1px] rounded-md'
            )}  
              onClick={() => {router.push(`/?page=${pageNumber}`, {scroll: false})}}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem
          aria-disabled={hasNextPage} 
          onClick={() => handleNextPage(Number(page))} 
          className={cn(!hasNextPage ? 'cursor-default' : 'cursor-pointer', 
          "bg-buttonBorderGray border-cardBgGray border-2 rounded-md hover:bg-buttonBorderGray")}
        >
          <PaginationNext 
            className={cn(!hasNextPage ? 'text-[#505568] hover:bg-buttonBorderGray hover:text-[#505568]' : 
            'text-white hover:bg-buttonBorderGray hover:text-white hover:border-white hover:border-[1px] rounded-md')} 
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

  )
}

export default PaginationComponent