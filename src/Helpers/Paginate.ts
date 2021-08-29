import { Entity, Repository } from 'typeorm'

export const paginateInfo = async (model: Repository<Entity>, page: number, pageLimitDefault?: number): Promise<object> => {
  const pageLimit = pageLimitDefault || (process.env.PAGINATION_PAGE_LIMIT || 20)
  const total = (await model.find()).length
  // @ts-ignore
  const totalPage = Math.ceil(total / pageLimit)

  return {
    total,
    totalPage,
    page
  }
}
