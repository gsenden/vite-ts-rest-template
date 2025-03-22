export interface HelloRepositoryInterface {
	track(): number;
	getCount(): number;
}

export class InMemoryHelloRepository implements HelloRepositoryInterface {
	private _count = 0;

	track(): number {
		this._count++;
		return this._count;
	}

	getCount(): number {
		return this._count;
	}
}
