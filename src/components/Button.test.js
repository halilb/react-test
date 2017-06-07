import React from 'react';
import Button from './Button';
import { createRenderer } from 'react-test-renderer/shallow';

const setup = props => {
  const renderer = createRenderer();
  renderer.render(<Button {...props} />);
  const output = renderer.getRenderOutput();

  return output;
};

describe('Button', () => {
  it('renders button text', () => {
    const renderer = createRenderer();
    const output = setup({
      text: 'Button Text',
    });
    expect(output.props.children).toBe('Button Text');
  });

  it('invokes onClick method correctly', () => {
    const onClick = jest.fn();
    const renderer = createRenderer();
    const output = setup({
      text: 'Button Text',
      onClick,
    });

    // this is probably useless. try avoiding shallow rendering
    // and using ReactTestUtils.Simulate.click instead
    output.props.onClick();
    expect(onClick).toBeCalled();
  });
});
