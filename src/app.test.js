import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import Counter from './components/counter';

describe("Main testing module for the application", () => {
    it("App should have Counter component", () => {
        const appComponent = shallow(<App/>);
        expect(appComponent.find(Counter)).toHaveLength(1);
    });
    it("App should have span component with correct text", () => {
        const appComponent = shallow(<App/>);
        const span = appComponent.find('span').first()
        expect(span.text()).toEqual('Welcome to React-Redux Boilerplate');
    })
})