import { html, TemplateResult } from 'lit-html';
import '../src/logical-phase.js';

export default {
  title: 'LogicalPhase',
  component: 'logical-phase',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <logical-phase style="--logical-phase-background-color: ${backgroundColor}" .title=${title}></logical-phase>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
