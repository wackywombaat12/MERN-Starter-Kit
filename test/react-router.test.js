import React from 'react';
import ReactDOM from 'react-dom';
import { mount,configure } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Login from '../src/client/pages/Login.jsx';
import Home from '../src/client/pages/Home.jsx';
import App from '../src/client/components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Router Login Path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/login' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(1);
});

test('Router Home Path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});