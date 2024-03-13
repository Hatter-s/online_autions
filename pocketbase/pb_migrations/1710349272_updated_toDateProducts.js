/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h")

  collection.options = {
    "query": "SELECT products.id, time_closing, products.product_status FROM products\nWHERE DATETIME(products.time_closing) < DATETIME('now') AND products.product_status = 0"
  }

  // remove
  collection.schema.removeField("nrazrreu")

  // remove
  collection.schema.removeField("o2qdpjoc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "goceyas5",
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
    "id": "fm2ixnqh",
    "name": "product_status",
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
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h")

  collection.options = {
    "query": "SELECT products.id, time_closing, products.product_status FROM products\nWHERE DATETIME(products.time_closing) < DATETIME('now')"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrazrreu",
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
    "id": "o2qdpjoc",
    "name": "product_status",
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

  // remove
  collection.schema.removeField("goceyas5")

  // remove
  collection.schema.removeField("fm2ixnqh")

  return dao.saveCollection(collection)
})
