import { mockedQiitaResponse } from '../mocks/mockResponses'
import { http,HttpResponse } from 'msw'

export const handlers = [
    http.get('https://qiita.com/PoPodada/feed', () => {
        
        return new HttpResponse(mockedQiitaResponse,{
          status:200
        })
      }),
]