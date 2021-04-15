import React from 'react';
import { shallow, mount} from 'enzyme'

import Header from '../components/Header/Header'

const props ={
    toggleValue: true, 
    setToggleValue:jest.fn()
}

const props1 ={
    toggleValue: false, 
    setToggleValue:jest.fn()
}

describe("Test Snapshot", () =>{

    it("should match snapshot", ()=>{

        let wrapper = shallow(<Header {...props}/>)

        expect(wrapper).toMatchSnapshot()
    })

    it("should match snapshot when dark", ()=>{

        let wrapper = shallow(<Header {...props1}/>)

        expect(wrapper).toMatchSnapshot()
    })
})

describe("Test toggle envent", () =>{

    it("should match snapshot", ()=>{

        let wrapper = shallow(<Header {...props}/>)

        wrapper.find("input").simulate("change", {target:{checked:false}})

    })


})