// @flow
'use strict';

const {NativeModules} = require('react-native');
const sha256Lib = NativeModules.sha256Lib;

export function sha256 (data: string): Promise<string> {
    return sha256Lib.sha256(data);
}
