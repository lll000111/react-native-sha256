// @flow
'use strict';

const {NativeModules} = require('react-native');
const sha256Lib = NativeModules.sha256Lib;

/**
 * Calculate SHA-256 hash of a string. The hash is returned as lowercase hexadecimal string.
 * @param {string} data
 * @returns {Promise<string>}
 */
export function sha256 (data: string): Promise<string> {
    return sha256Lib.sha256(data);
}
