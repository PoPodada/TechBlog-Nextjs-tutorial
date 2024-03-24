import { http,HttpResponse } from 'msw'

export const handlers = [
    http.get('https://qiita.com/PoPodada/feed', () => {
        
        return new HttpResponse('Hello world!')
      }),
]