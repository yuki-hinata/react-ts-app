type User = {
  id: number
  name: string
}

export type Methods = {
  get: {
    query?: {
      limit: number
    }

    resBody: User[]
  }

  post: {
    reqBody: {
      name: string
    }

    resBody: User
    /**
     * reqHeaders(?): ...
     * reqFormat: ...
     * status: ...
     * resHeaders(?): ...
     * polymorph: [...]
     */
  }
}
