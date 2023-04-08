import { useEffect, useState } from "react"
import { getCategory } from "@/api/category"
const MobileNavigation = () => {
  const [category, setCategory] = useState();

  const getCategoryData = async () => {
    const res = await getCategory()
    return res;
  }
  useEffect(() => {
    getCategoryData().then(data => {
      setCategory(data)
    })
  }, [])
  return (
    <div>
      <h3>MobileNavigation</h3>
      <div>{ JSON.stringify(category) }</div>
    </div>
  )
}
export default MobileNavigation