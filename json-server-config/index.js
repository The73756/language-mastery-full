const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')

const index = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

index.use(jsonServer.defaults({}))
index.use(jsonServer.bodyParser)

index.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 500)
  })
  next()
})

index.post('/login', (req, res) => {
  try {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users = [] } = db

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    )

    if (userFromBd) {
      return res.json(userFromBd)
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
})

index.patch('/articles/:articleId/cards/:cardId', (req, res) => {
  try {
    const { articleId, cardId } = req.params
    const cardData = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { articles = [] } = db

    const article = articles.find((article) => String(article.id) === String(articleId))
    if (!article || article.type !== 'CARD') {
      return res.status(404).json({ message: 'Article not found' })
    }

    const card = article.cards.find((card) => String(card.id) === String(cardId))
    if (!card) {
      return res.status(404).json({ message: 'Card not found' })
    }

    // Merge existing card data with new card data
    const updatedCard = { ...card, ...cardData }

    // Replace the old card with the updated card
    const cardIndex = article.cards.indexOf(card)
    article.cards[cardIndex] = updatedCard

    // Write the updated data back to the database
    fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(db))

    return res.json(updatedCard)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
})

const protectedRoutes = [/^\/articles\/\d+$/, /^\/articles\/\d+\/cards\/\d+$/]

index.use((req, res, next) => {
  if (protectedRoutes.some((route) => route.test(req.url)) && !req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' })
  }

  next()
})

index.use(router)

index.listen(5000, () => {
  console.log('server is running on 5000 port')
})
