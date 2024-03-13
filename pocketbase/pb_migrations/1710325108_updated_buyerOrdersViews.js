/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bnx31zqtjpkvte")

  collection.options = {
    "query": "select orders.id,orders.offer_price, `ordersView`.offer_price as current_price, orders.created, orders.is_fix_price , buyer.name as buyer_name, buyer.id as buyer_id ,  seller.name as seller_name, seller.id as seller_id , pro.name as product_name , pro.product_image, pro.id as product_id from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  LEFT JOIN `ordersView` on orders.product_id = `ordersView`.product_id\n  GROUP by buyer.id, pro.id HAVING Max(orders.offer_price)"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "piqvrwcy",
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
    "id": "3amm10va",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "12k8sr38",
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
    "id": "i2vhyc9o",
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
    "id": "sis2vfa5",
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
    "id": "oldfhilm",
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
    "id": "qz1v65or",
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
    "id": "rm6f4pth",
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
    "id": "23bvaj7f",
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
    "id": "oucdhwen",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bnx31zqtjpkvte")

  collection.options = {
    "query": "select orders.id,orders.offer_price, orders.created, orders.is_fix_price , buyer.name as buyer_name, buyer.id as buyer_id ,  seller.name as seller_name, seller.id as seller_id , pro.name as product_name , pro.product_image, pro.id as product_id, `ordersView`.offer_price as current_price from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  LEFT JOIN `ordersView` on orders.product_id = `ordersView`.product_id\n  GROUP by buyer.id, pro.id HAVING Max(orders.offer_price)"
  }

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

  // remove
  collection.schema.removeField("piqvrwcy")

  // remove
  collection.schema.removeField("3amm10va")

  // remove
  collection.schema.removeField("12k8sr38")

  // remove
  collection.schema.removeField("i2vhyc9o")

  // remove
  collection.schema.removeField("sis2vfa5")

  // remove
  collection.schema.removeField("oldfhilm")

  // remove
  collection.schema.removeField("qz1v65or")

  // remove
  collection.schema.removeField("rm6f4pth")

  // remove
  collection.schema.removeField("23bvaj7f")

  // remove
  collection.schema.removeField("oucdhwen")

  return dao.saveCollection(collection)
})
