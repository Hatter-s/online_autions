/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fv7mjfmd8yzx96s")

  collection.updateRule = "seller.id = @request.auth.id"
  collection.deleteRule = "seller.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fv7mjfmd8yzx96s")

  collection.updateRule = ""
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
