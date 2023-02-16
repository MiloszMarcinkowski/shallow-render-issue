import { TestComponent } from './test.component';
import {Shallow} from "shallow-render";
import {TestModule} from "./test.module";
describe('TestComponent', () => {
  let shallow: Shallow<TestComponent>;

  beforeEach(() => {
    shallow = new Shallow(TestComponent, TestModule);
  });

  it('app test', async () => {
    const { fixture } = await shallow.render();

    expect(fixture).toMatchSnapshot();
  })
});
