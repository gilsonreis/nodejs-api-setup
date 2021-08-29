import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { paginateInfo } from '@helpers/Paginate'
import User from '@models/User'

class UserController {
  public async index (request: Request, response: Response): Promise<Response> {
    const { page = 1 } = request.query
    const repository = getRepository(User)
    const users = await repository.find({
      skip: 1,
      take: 2
    })

    return response.json({
      users,
      pageInfo: await paginateInfo(repository, page)
    })
  }

  public async store (request: Request, response: Response): Promise<Response> {
    const repository = getRepository(User)

    const {
      email,
      password
    } = request.body

    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return response.sendStatus(409)
    }

    const user = await repository.create({
      email,
      password
    })
    await repository.save(user)

    return response.json(user)
  }
}

export default new UserController()
