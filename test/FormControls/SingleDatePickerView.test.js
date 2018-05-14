import React from 'react';
import { SingleDatePickerView } from '../../src/FormControls/SingleDatePickerView'
import renderer from 'react-test-renderer';

test('SingleDatePickerView test', () => {
    const baseProps = {
        _key: "Single",
        label: "Date Single",
        onChange: () => { console.log("onChange") },
        errorFor: () => { console.log("Error") },
    };
    const component = renderer.create(
        <SingleDatePickerView {...baseProps} />,
    );
    let tree = component.toJSON();
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