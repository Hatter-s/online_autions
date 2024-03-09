/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fv7mjfmd8yzx96s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fhss9jb2",
    "name": "time_closing",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "irxv90hn",
    "name": "status",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fv7mjfmd8yzx96s")

  // remove
  collection.schema.removeField("fhss9jb2")

  // remove
  collection.schema.removeField("irxv90hn")

  return dao.saveCollection(collection)
})
