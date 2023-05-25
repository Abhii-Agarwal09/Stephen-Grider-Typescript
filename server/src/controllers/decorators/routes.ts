import 'reflect-metadata';
import { Methods } from './Methods';

function routeBinder(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      // console.log('target in get', target, 'Key in get', key);
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);