export const metadata = {
  title: 'Sách theo danh mục',
  description: 'Trang sách theo danh mục',
}

import BooksSearch from "@/components/books-search/books-search"
import { Suspense } from "react"
import Loading from "@/components/loading"

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <BooksSearch />
    </Suspense>

  )
}