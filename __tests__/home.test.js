// import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/components/home.jsx';

// const wrapper = shallow(<Home />);

describe('Home Page component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
