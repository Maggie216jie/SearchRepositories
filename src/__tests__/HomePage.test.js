import React from 'react';
import { shallow, mount} from 'enzyme'

import HomePage from '../containers/HomePage'




describe("Test Snapshot", () =>{

    it("should match snapshot", ()=>{

        let wrapper = shallow(<HomePage />)

        expect(wrapper).toMatchSnapshot()
    })

})