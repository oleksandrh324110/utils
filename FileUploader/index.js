import express from 'express'
import fileUpload from 'express-fileupload'
import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const app = new express()

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.post(
  '/*',
  fileUpload({
    createParentPath: true,
    defCharset: 'utf8',
    defParamCharset: 'utf8'
  }),
  (req, res) => {
    const files = req.files
    for (let key of Object.keys(files)) {
      fs.writeFile(
        '/Users/alex/Desktop/' + files[key].name,
        files[key].data,
        () => {}
      )
    }

    return res.sendStatus(200)
  }
)

app.listen(80, () => console.log('Started'))
