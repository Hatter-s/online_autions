/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3bnx31zqtjpkvte")

  collection.options = {
    "query": "select orders.id,orders.offer_price, `ordersView`.offer_price as current_price, `ordersView`.buyer_name as current_buyer, orders.created, orders.is_fix_price , buyer.name as buyer_name, buyer.id as buyer_id ,  seller.name as seller_name, seller.id as seller_id , pro.name as product_name , pro.product_image, pro.id as product_id from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  LEFT JOIN `ordersView` on orders.product_id = `ordersView`.product_id\n  GROUP by buyer.id, pro.id HAVING Max(orders.offer_price)"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqhqkis3",
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
    "id": "eyru2un7",
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
    "id": "rn2ywjmc",
    "name": "current_buyer",
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
    "id": "bnfavxs4",
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
    "id": "m63ul9e1",
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
    "id": "8lnkv3zk",
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
    "id": "bqg3j1ez",
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
    "id": "qpcjrnra",
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
    "id": "cphedvgc",
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
    "id": "aavvwo7b",
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
    "id": "t8wfhio1",
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
    "query": "select orders.id,orders.offer_price, `ordersView`.offer_price as current_price, orders.created, orders.is_fix_price , buyer.name as buyer_name, buyer.id as buyer_id ,  seller.name as seller_name, seller.id as seller_id , pro.name as product_name , pro.product_image, pro.id as product_id from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  LEFT JOIN `ordersView` on orders.product_id = `ordersView`.product_id\n  GROUP by buyer.id, pro.id HAVING Max(orders.offer_price)"
  }

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

  // remove
  collection.schema.removeField("iqhqkis3")

  // remove
  collection.schema.removeField("eyru2un7")

  // remove
  collection.schema.removeField("rn2ywjmc")

  // remove
  collection.schema.removeField("bnfavxs4")

  // remove
  collection.schema.removeField("m63ul9e1")

  // remove
  collection.schema.removeField("8lnkv3zk")

  // remove
  collection.schema.removeField("bqg3j1ez")

  // remove
  collection.schema.removeField("qpcjrnra")

  // remove
  collection.schema.removeField("cphedvgc")

  // remove
  collection.schema.removeField("aavvwo7b")

  // remove
  collection.schema.removeField("t8wfhio1")

  return dao.saveCollection(collection)
})
