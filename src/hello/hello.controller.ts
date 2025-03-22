import { Express } from 'express';
import { HelloServiceInterface } from './hello.service';

export class HelloController {
	constructor(
		private readonly service: HelloServiceInterface,
		private readonly app: Express
	) {
		this.registerRoutes();
	}

	registerRoutes(): void {
		this.app.get('/api/hello', (req, res) => {
			const message = this.service.hello();
			res.send(message);
		});

		this.app.get('/api/hello/:number', (req, res) => {
			const guessedNumber = parseInt(req.params.number);
			const guessResult = this.service.guess(guessedNumber);

			guessResult.match(
				(value) => res.send(value),
				(error) => res.status(400).send(error.message)
			);
		});
	}
}
