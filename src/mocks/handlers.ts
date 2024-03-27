import { mockedQiitaResponse } from '../mocks/mockResponses'
import { mockedQiitaArticleResponse } from '../mocks/mockResponses'
import { http,HttpResponse } from 'msw'

export const handlers = [
    http.get('https://qiita.com/PoPodada/feed', () => {
        
        return new HttpResponse(mockedQiitaResponse,{
          status:200
        })
      }),
      http.get('https://qiita.com/PoPodada/items/30bdf57e1d3ea7bc070b', () => {
        
        return new HttpResponse(mockedQiitaArticleResponse,{
          status:200,
          headers: {
            'Content-Type': 'text/html',
          },
        })
      })
]