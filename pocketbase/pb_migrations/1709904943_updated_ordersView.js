/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z8rn7dr4er2et53")

  collection.options = {
    "query": "select orders.id,orders.offer_price, orders.created, orders.is_accept, orders.is_fix_price , buyer.name as buyer_name , seller.name as seller_name , pro.name as product_name , pro.product_image, pro.id as product_id, pro.categories, pro.description, pro.minium_price from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  GROUP by pro.id HAVING Max(orders.offer_price)"
  }

  // remove
  collection.schema.removeField("hilvnf0p")

  // remove
  collection.schema.removeField("7th4hc4p")

  // remove
  collection.schema.removeField("4hyq1a4h")

  // remove
  collection.schema.removeField("o7or34wi")

  // remove
  collection.schema.removeField("jelrnfbt")

  // remove
  collection.schema.removeField("i0mxb7ee")

  // remove
  collection.schema.removeField("6mpwlbrv")

  // remove
  collection.schema.removeField("qcvq5wa5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rimx0qw4",
    "name": "offer_price",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jjhry6h5",
    "name": "is_accept",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tkxoiyqv",
    "name": "is_fix_price",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ec6yb1gj",
    "name": "buyer_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "56fykond",
    "name": "seller_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4xdvvla",
    "name": "product_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2qqjjakb",
    "name": "product_image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [
        "100x300"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x4mxf8fi",
    "name": "product_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fv7mjfmd8yzx96s",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgii77fp",
    "name": "categories",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j09svb28xbfnoub",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9jcirh6c",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2btbadqb",
    "name": "minium_price",
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
  const collection = dao.findCollectionByNameOrId("z8rn7dr4er2et53")

  collection.options = {
    "query": "select orders.id,orders.offer_price, orders.created, orders.is_accept, orders.is_fix_price , buyer.name as buyer_name , seller.name as seller_name , pro.name as product_name , pro.product_image, pro.id as product_id from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  GROUP by pro.id HAVING Max(orders.offer_price)"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hilvnf0p",
    "name": "offer_price",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7th4hc4p",
    "name": "is_accept",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4hyq1a4h",
    "name": "is_fix_price",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o7or34wi",
    "name": "buyer_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jelrnfbt",
    "name": "seller_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i0mxb7ee",
    "name": "product_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6mpwlbrv",
    "name": "product_image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [
        "100x300"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qcvq5wa5",
    "name": "product_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fv7mjfmd8yzx96s",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("rimx0qw4")

  // remove
  collection.schema.removeField("jjhry6h5")

  // remove
  collection.schema.removeField("tkxoiyqv")

  // remove
  collection.schema.removeField("ec6yb1gj")

  // remove
  collection.schema.removeField("56fykond")

  // remove
  collection.schema.removeField("u4xdvvla")

  // remove
  collection.schema.removeField("2qqjjakb")

  // remove
  collection.schema.removeField("x4mxf8fi")

  // remove
  collection.schema.removeField("xgii77fp")

  // remove
  collection.schema.removeField("9jcirh6c")

  // remove
  collection.schema.removeField("2btbadqb")

  return dao.saveCollection(collection)
})
