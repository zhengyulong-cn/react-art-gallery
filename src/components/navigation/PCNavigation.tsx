import type { ICategoriesItem } from "@/api/category/types"
interface IProp {
  categories: Array<ICategoriesItem>
}
const PCNavigation = ({ categories }: IProp) => {
  return (
    <div>
      <h3>PC</h3>
      <div>{JSON.stringify(categories)}</div>
    </div>
  )
}
export default PCNavigation