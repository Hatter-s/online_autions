/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h")

  collection.options = {
    "query": "SELECT id, time_closing FROM products\nWHERE DATETIME(products.time_closing) < DATETIME('now') "
  }

  // remove
  collection.schema.removeField("nnpvhluo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "edxgropw",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h")

  collection.options = {
    "query": "SELECT id, time_closing FROM products\nWHERE DATE(products.time_closing) < DATE('now') "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnpvhluo",
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

  // remove
  collection.schema.removeField("edxgropw")

  return dao.saveCollection(collection)
})
