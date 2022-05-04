import A from './';
import anyTest, { TestFn } from 'ava';

const test = anyTest as TestFn<{ cwd: string }>;

test.beforeEach(t => {
  console.log(t.title)
});

test('should work', t => {
  console.log(new A().hello());
  t.deepEqual({a: 1}, {a: 1});
});