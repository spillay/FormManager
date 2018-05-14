import React from 'react';
import 'react-dates/initialize';
import {DateRangePickerView} from '../../src/FormControls/DateRangePickerView'
import renderer from 'react-test-renderer';

test('DateRangePickerView test', () => {
  const baseProps = {
    _key: "dateRange",
    label: "Date Range",
    onChange: () => {console.log("onChange")},
    errorFor: () => {console.log("Error")},
  };
  const component = renderer.create(
    <DateRangePickerView {...baseProps}/>,
  );
  let tree = component.toJSON();
  console.log(expect(tree));
  expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});