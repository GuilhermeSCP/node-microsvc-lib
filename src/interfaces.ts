/**
 * Created by pedrosousabarreto@gmail.com on 15/Jan/2019.
 */
"use strict";

export enum LogLevels {
	TRACE,
	DEBUG,
	INFO,
	WARN,
	ERROR,
	FATAL,
}

export type MessageType = {
	correlation_id?: string;
	log_level: LogLevels;
	message: string;
}

export interface ILogger {
	debug(message?: any, ...optionalParams: any[]): void;
	info(message?: any, ...optionalParams: any[]): void;
	warn(message?: any, ...optionalParams: any[]): void;
	error(message?: any, ...optionalParams: any[]): void;
	fatal(message?: any, ...optionalParams: any[]): void;

	create_child(attrs?:object):ILogger;
}

export interface IDiFactory {
	name: string;
	init(callback: (err?: Error) => void):void;
	destroy(callback:(err?:Error)=>void):void;
}

export interface IConfigsProvider{
	readonly solution_name:string;
	init(keys:string[], callback:(err?:Error)=>void):void;
	get_value(key_name:string):string|null;
}
