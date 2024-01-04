const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')

const index = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

index.use(jsonServer.defaults({}))
index.use(jsonServer.bodyParser)

index.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 300)
  })
  next()
})

index.post('/login', (req, res) => {
  try {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users = [] } = db

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password
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

index.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' })
  }

  next()
})

index.use(router)

index.listen(5000, () => {
  console.log('server is running on 5000 port')
})
