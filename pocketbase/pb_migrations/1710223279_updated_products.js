/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fv7mjfmd8yzx96s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cly0ephw",
    "name": "wish_list_of",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fv7mjfmd8yzx96s")

  // remove
  collection.schema.removeField("cly0ephw")

  return dao.saveCollection(collection)
})
