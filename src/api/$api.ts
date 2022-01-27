/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './people/_peopleId@number'
// prettier-ignore
import { Methods as Methods1 } from './v1/users'
// prettier-ignore
import { Methods as Methods2 } from './v1/users/_userId@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://swapi.dev/api' : baseURL).replace(/\/$/, '')
  const PATH0 = '/people'
  const PATH1 = '/v1/users'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'

  return {
    people: {
      _peopleId: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
            fetch<Methods0['put']['resBody']>(prefix, prefix1, PUT, option).json(),
          $put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
            fetch<Methods0['put']['resBody']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    v1: {
      users: {
        _userId: (val2: number) => {
          const prefix2 = `${PATH1}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods2['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods2['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
              fetch<Methods2['put']['resBody']>(prefix, prefix2, PUT, option).json(),
            $put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
              fetch<Methods2['put']['resBody']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
