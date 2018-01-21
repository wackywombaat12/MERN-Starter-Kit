import React from 'react';
import ReactDOM from 'react-dom';
import { mount,configure } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Login from '../src/client/components/Login.jsx';
import App from '../src/client/components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Login Path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/login' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(1);
});