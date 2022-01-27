type People = {
  id: number
  height: string
  name: string
}

export type Methods = {
  get: {
    resBody: People
  }

  put: {
    reqBody: {
      name: string
    }

    resBody: People
  }
}
