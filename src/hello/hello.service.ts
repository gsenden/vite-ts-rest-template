import { Express } from 'express';
import { HelloRepositoryInterface } from './hello.repository';

export interface HelloServiceInterface {
	hello(): string;
}

export class HelloService implements HelloServiceInterface {
	constructor(private readonly repository: HelloRepositoryInterface) {}

	hello(): string {
		const count = this.repository.track();
		const times = count === 1 ? 'time' : 'times';
		return `Hello there!  (I have said hello: ${count} ${times})`;
	}
}
