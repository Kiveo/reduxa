import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Counter from './Counter';
import configureStore from 'redux-mock-store';

const middlewares = []
const mockStore = configureStore(middlewares)

describe('Counter Component Tests', () => {
  it('renders', function () {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update local Count onClick of ADD', async () => {
    // -- arrange --
    // const dummyStore = mockStore({ count: 2 })
    let sampleCount = 1986;
    const mockAdd = jest.fn()
    const mockDispatch = jest.fn()
    const wrapper = shallow(<Counter
      count={sampleCount}
      increment={mockAdd}
      dispatch={mockDispatch}
    />);
    expect(wrapper.find('#globalCount').text()).toBe('1986'); // default value
    expect(mockAdd).not.toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();

    // -- act --
    const addButton = wrapper.find('#addButton');
    expect(addButton).toHaveLength(1);
    addButton.props().onClick();
    wrapper.update();

    // -- assert --
    expect(mockAdd).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalled();
    // expect(wrapper.find('#globalCount').text()).toBe('1');
  });



});
