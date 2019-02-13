/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.TestModel', null, global);
goog.exportSymbol('proto.TestModelList', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TestModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TestModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TestModel.displayName = 'proto.TestModel';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TestModel.prototype.toObject = function(opt_includeInstance) {
  return proto.TestModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TestModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firstname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    testnum: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TestModel}
 */
proto.TestModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestModel;
  return proto.TestModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestModel}
 */
proto.TestModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTestnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TestModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTestnum();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 Id = 1;
 * @return {number}
 */
proto.TestModel.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.TestModel.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string FirstName = 2;
 * @return {string}
 */
proto.TestModel.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.TestModel.prototype.setFirstname = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string LastName = 3;
 * @return {string}
 */
proto.TestModel.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.TestModel.prototype.setLastname = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Address = 4;
 * @return {string}
 */
proto.TestModel.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.TestModel.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 TestNum = 5;
 * @return {number}
 */
proto.TestModel.prototype.getTestnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.TestModel.prototype.setTestnum = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TestModelList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.TestModelList.repeatedFields_, null);
};
goog.inherits(proto.TestModelList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TestModelList.displayName = 'proto.TestModelList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.TestModelList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TestModelList.prototype.toObject = function(opt_includeInstance) {
  return proto.TestModelList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TestModelList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestModelList.toObject = function(includeInstance, msg) {
  var f, obj = {
    testmodelsList: jspb.Message.toObjectList(msg.getTestmodelsList(),
    proto.TestModel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TestModelList}
 */
proto.TestModelList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestModelList;
  return proto.TestModelList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestModelList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestModelList}
 */
proto.TestModelList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.TestModel;
      reader.readMessage(value,proto.TestModel.deserializeBinaryFromReader);
      msg.addTestmodels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TestModelList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestModelList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestModelList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TestModelList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTestmodelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.TestModel.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TestModel TestModels = 1;
 * @return {!Array<!proto.TestModel>}
 */
proto.TestModelList.prototype.getTestmodelsList = function() {
  return /** @type{!Array<!proto.TestModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TestModel, 1));
};


/** @param {!Array<!proto.TestModel>} value */
proto.TestModelList.prototype.setTestmodelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.TestModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.TestModel}
 */
proto.TestModelList.prototype.addTestmodels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.TestModel, opt_index);
};


proto.TestModelList.prototype.clearTestmodelsList = function() {
  this.setTestmodelsList([]);
};


goog.object.extend(exports, proto);
