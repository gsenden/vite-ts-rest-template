import { HelloRepositoryInterface } from '../src/hello/hello.repository';
import { HelloService } from '../src/hello/hello.service';

class TestHelloRepository implements HelloRepositoryInterface {
	track(): number {
		return 1;
	}

	getCount(): number {
		return 42;
	}
}

describe('Hello', () => {
	it('should return a valid hello message', () => {
		// Given a hello service
		const helloService = new HelloService(new TestHelloRepository());

		// When I call hello
		const result = helloService.hello();

		// Then I should get a valid hello message
		expect(result).toBe('Hello there!  (I have said hello: 1 time)');
	});

	it('should return a valid guess message', () => {
		// Given a hello service
		const helloService = new HelloService(new TestHelloRepository());

		// When I call guess with a valid number
		const result = helloService.guess(42);

		// Then I should get a valid guess message
		result.match(
			(value) => expect(value).toBe(true),
			(_) => fail('Expected success but got error')
		);
	});

	it('should return a valid guess error', () => {
		// Given a hello service
		const helloService = new HelloService(new TestHelloRepository());

		// When I call guess with an invalid number
		const result = helloService.guess(43);

		// Then I should get an error message
		result.match(
			(_) => fail('Expected error but got success'),
			(error) => expect(error.message).toBe('Wrong guess!')
		);
	});
});
