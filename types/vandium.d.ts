
type VandiumHandler = {
  HEAD: Function
  GET: Function
  POST: Function
  PATCH: Function
  DELETE: Function
  cors: Function
  onError: Function
  before: Function
  after: Function
}


export function api(options: any): VandiumHandler;
export function cloudformation(args: any): any;
export function cloudwatch(args: any): any;
export function cognito(args: any): any;
export function dynamodb(args: any): any;
export function generic(options: any): any;
export function kinesis(args: any): any;
export function lex(args: any): any;
export function s3(args: any): any;
export function scheduled(args: any): any;
export function ses(args: any): any;
export function sns(args: any): any;
export namespace types {
  function alternatives(): any;
  function any(): any;
  function array(): any;
  function binary(): any;
  function boolean(): any;
  function date(): any;
  function email(opts: any): any;
  function number(): any;
  function object(): any;
  function string(opts: any): any;
  function uuid(): any;
}
