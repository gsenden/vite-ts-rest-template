import { HelloService } from '../src/hello/hello.service';
import { InMemoryHelloRepository } from '../src/hello/hello.repository';

describe('HelloService', () => {
	let service: HelloService;
	let repository: InMemoryHelloRepository;

	beforeEach(() => {
		repository = new InMemoryHelloRepository();
		service = new HelloService(repository);
	});

	it('should return hello message with visit count', () => {
		const message = service.hello();
		expect(message).toBe('Hello there!  (I have said hello: 1 time)');
	});

	it('should increment visit count on each call', () => {
		service.hello();
		const message = service.hello();
		expect(message).toBe('Hello there!  (I have said hello: 2 times)');
	});
});
