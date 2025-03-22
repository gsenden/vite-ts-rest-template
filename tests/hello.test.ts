import { HelloRepositoryInterface } from '../src/hello/hello.repository';
import { HelloService } from '../src/hello/hello.service';

class TestHelloRepository implements HelloRepositoryInterface {
	track(): number {
		return 1;
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
});
