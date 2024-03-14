/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65ggbsvpthu4zuq")

  collection.updateRule = "@request.auth.id = seller || @request.auth.id = buyer"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65ggbsvpthu4zuq")

  collection.updateRule = "@request.auth.id = seller"

  return dao.saveCollection(collection)
})
