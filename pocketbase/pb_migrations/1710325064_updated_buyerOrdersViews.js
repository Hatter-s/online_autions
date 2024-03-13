/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bnx31zqtjpkvte")

  collection.options = {
    "query": "select orders.id,orders.offer_price, orders.created, orders.is_fix_price , buyer.name as buyer_name, buyer.id as buyer_id ,  seller.name as seller_name, seller.id as seller_id , pro.name as product_name , pro.product_image, pro.id as product_id, `ordersView`.offer_price as current_price from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  LEFT JOIN `ordersView` on orders.product_id = `ordersView`.product_id\n  GROUP by buyer.id, pro.id HAVING Max(orders.offer_price)"
  }

  // remove
  collection.schema.removeField("nosqtqfr")

  // remove
  collection.schema.removeField("2omsnj1l")

  // remove
  collection.schema.removeField("rcqk0rt5")

  // remove
  collection.schema.removeField("ssanjnik")

  // remove
  collection.schema.removeField("5lt7qpz1")

  // remove
  collection.schema.removeField("2vw6thnf")

  // remove
  collection.schema.removeField("hyc2jk4e")

  // remove
  collection.schema.removeField("dicf7nye")

  // remove
  collection.schema.removeField("i6nezees")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmgzhl77",
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
    "id": "apqv9ex8",
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
    "id": "zihftcs8",
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
    "id": "tudmh32k",
    "name": "buyer_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulqtaliv",
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
    "id": "g1milh4c",
    "name": "seller_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aapmf1vo",
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
    "id": "2qlzu1h0",
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
    "id": "oyz4xqhw",
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
    "id": "1my3dwqs",
    "name": "current_price",
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
  const collection = dao.findCollectionByNameOrId("3bnx31zqtjpkvte")

  collection.options = {
    "query": "select orders.id,orders.offer_price, orders.created, orders.is_fix_price , buyer.name as buyer_name, buyer.id as buyer_id ,  seller.name as seller_name, seller.id as seller_id , pro.name as product_name , pro.product_image, pro.id as product_id from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  LEFT JOIN `ordersView` on orders.product_id = `ordersView`.product_id\n  GROUP by buyer.id, pro.id HAVING Max(orders.offer_price)"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nosqtqfr",
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
    "id": "2omsnj1l",
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
    "id": "rcqk0rt5",
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
    "id": "ssanjnik",
    "name": "buyer_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5lt7qpz1",
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
    "id": "2vw6thnf",
    "name": "seller_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hyc2jk4e",
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
    "id": "dicf7nye",
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
    "id": "i6nezees",
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
  collection.schema.removeField("tmgzhl77")

  // remove
  collection.schema.removeField("apqv9ex8")

  // remove
  collection.schema.removeField("zihftcs8")

  // remove
  collection.schema.removeField("tudmh32k")

  // remove
  collection.schema.removeField("ulqtaliv")

  // remove
  collection.schema.removeField("g1milh4c")

  // remove
  collection.schema.removeField("aapmf1vo")

  // remove
  collection.schema.removeField("2qlzu1h0")

  // remove
  collection.schema.removeField("oyz4xqhw")

  // remove
  collection.schema.removeField("1my3dwqs")

  return dao.saveCollection(collection)
})
