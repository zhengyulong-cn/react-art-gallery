import http from "@/utils/request";

/**
 * 获取分类列表
 */
export const getCategory = () => {
  return http({
    url: '/category',
  })
}