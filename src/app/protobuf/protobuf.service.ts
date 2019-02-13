import { Injectable } from '@angular/core';
declare function require(path: string): any;
const proto = require('../../assets/js/schemas_pb.js');

@Injectable()
export class ProtobufService {
  readonly proto: any = proto;

  deserializeMessageBinary(data: Uint8Array) {
    return proto.ProtoModelList.deserializeBinary(data).toObject();
  }
}
