import { useEffect, useState } from "react"
import MobileNavigation from "./MobileNavigation"
import PCNavigation from "./PCNavigation"
import { getCategoryAPI } from "@/api/category"
import { useIsMobile } from "@/hooks/flexible"
import type { ICategoriesItem } from "@/api/category/types"

const Navigation = () => {
  const isMobile = useIsMobile();
  const [categories, setCategories] = useState<Array<ICategoriesItem>>([]);

  const getCategoryData = async () => {
    const res = await getCategoryAPI()
    return res;
  }
  useEffect(() => {
    getCategoryData().then(data => {
      setCategories(data)
    })
  }, [])
  return (
    <>
      {isMobile ? <MobileNavigation categories={categories} /> : <PCNavigation categories={categories}/>}
    </>
  )
}
export default Navigation