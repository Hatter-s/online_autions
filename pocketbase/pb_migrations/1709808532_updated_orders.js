/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jr8kv844d9lp14m")

  collection.viewRule = "@request.auth.id = buyer_id.id || @request.auth.id = seller_id.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jr8kv844d9lp14m")

  collection.viewRule = "@request.auth.id = buyer_id.id && @request.auth.id = seller_id.id"

  return dao.saveCollection(collection)
})
