import { HelloRepositoryInterface } from './hello.repository';
import { Result, ok, err } from 'neverthrow';

export interface HelloServiceInterface {
	hello(): string;
	guess(number: number): Result<boolean, Error>;
}

export class HelloService implements HelloServiceInterface {
	constructor(private readonly repository: HelloRepositoryInterface) {}

	hello(): string {
		const count = this.repository.track();
		const times = count === 1 ? 'time' : 'times';
		return `Hello there!  (I have said hello: ${count} ${times})`;
	}

	guess(number: number): Result<boolean, Error> {
		const count = this.repository.getCount();
		return number === count ? ok(true) : err(new Error('Wrong guess!'));
	}
}
