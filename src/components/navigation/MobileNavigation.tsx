import type { ICategoriesItem } from "@/api/category/types"
interface IProp {
  categories: Array<ICategoriesItem>
}
const MobileNavigation = ({ categories }: IProp) => {
  return (
    <div className="bg-white sticky top-0 left-0 z-10">
      <ul className=" relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
        { categories.map(item => (
          <li key={item.id} className="shrink-0 px-1.5 py-0.5 z-10 duration-200">{ item.name }</li>
        )) }
        <li className="shrink-0 px-1.5 py-0.5 z-10 duration-200"></li>
        <li className="fixed z-20 h-4 right-0 bg-red-400 px-1.5 shadow-md shadow-white dark:bg-zinc-900 dark:shadow-l-zinc">
          <i className="ri-menu-fill"></i>
        </li>
      </ul>
    </div>
  )
}
export default MobileNavigation