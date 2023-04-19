import http from "@/utils/request";
import { ICategoriesItem } from "./types"
/**
 * 获取分类列表
 */
export const getCategoryAPI = async (): Promise<Array<ICategoriesItem>> => {
  const data = await http('/category', 'GET');
  return (data?.categorys as Array<any>).map(el => ({
    col: el.col,
    id: el.id,
    name: el.name,
    urlName: el.urlname,
  }))
}