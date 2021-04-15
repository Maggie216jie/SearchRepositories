import React from 'react';
import { shallow, mount} from 'enzyme'

import SearchInput from '../components/SearchBar/SearchInput'

const props ={
    inputValue: true, 
    setInputValue:jest.fn()
}



describe("Test Snapshot", () =>{

    it("should match snapshot", ()=>{

        let wrapper = shallow(<SearchInput {...props}/>)

        expect(wrapper).toMatchSnapshot()
    })


})

describe("Test toggle envent", () =>{

    it("should match snapshot", ()=>{

        let wrapper = shallow(<SearchInput {...props}/>)

        wrapper.find("input").simulate("change", {target:{value:"n"}})

    })


})