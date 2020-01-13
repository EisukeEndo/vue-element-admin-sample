import { Response, Request } from 'express'

export const getEventInfo = (req: Request, res: Response) => {
  return res.json({
    eventInfo: {
      eveneName: 'イベント名だよ',
      item1: 'なんか値を表示するよ',
      item2: 'なんか値を表示するよーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー',
    },
    promotionList: [
      {
        id: '1',
        name: 'プロモーション１',
        item1: 'なんか値を表示するよ１−１',
        item2: 'なんか値を表示するよ１−２'
      },
      {
        id: '2',
        name: 'プロモーション２',
        item1: 'なんか値を表示するよ２−１',
        item2: 'なんか値を表示するよ２−２'
      },
      {
        id: '3',
        name: 'プロモーション３',
        item1: 'なんか値を表示するよ３−１',
        item2: 'なんか値を表示するよ３−２'
      }
    ]
  })
}
