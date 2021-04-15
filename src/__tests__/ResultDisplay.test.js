import React from "react";
import { MockedProvider } from '@apollo/client/testing';
import ResultDisplay from '../components/ResultPanel/ResultDisplay';
import { shallow, mount} from 'enzyme';
import gql from "graphql-tag";
import TestRenderer from 'react-test-renderer';
import renderer from 'react-test-renderer';




const SEARCH_QUERY = gql`
query($InputValue: String!) {
  user(login: $InputValue) {
    repositories(last: 100, isLocked: false) {
      totalCount
      nodes {
        description
        languages(first: 3) {
          nodes {
            name
          }
        }
        name
        url
        updatedAt
        id
      }
    }
  }
}
`;

const repoMock = {
    request: {
        query: SEARCH_QUERY,
        variables: { InputValue: "test" }
    },
    result: {
        data: {
            user: {
                repositories: {
                    totalCount: 1,
                    nodes: [
                        {"__typename":"Repository","description":"ruby on rails tuttorial","languages":{"__typename":"LanguageConnection","nodes":[]},"name":"banu","url":"https://github.com/mrbanupriya/banu","updatedAt":"2013-01-03T20:15:39Z","id":"MDEwOlJlcG9zaXRvcnkyMDE3NjU3"},{"__typename":"Repository","description":"ThoughtWorks code challenge ","languages":{"__typename":"LanguageConnection","nodes":[{"__typename":"Language","name":"Ruby"},{"__typename":"Language","name":"CSS"}]},"name":"mars_rover","url":"https://github.com/ryanhburbank/mars_rover","updatedAt":"2014-02-19T19:05:56Z","id":"MDEwOlJlcG9zaXRvcnkxNjI5MzM5Mg=="},{"__typename":"Repository","description":"Heroku buildpack: Wordpress on Heroku","languages":{"__typename":"LanguageConnection","nodes":[{"__typename":"Language","name":"Shell"}]},"name":"heroku-buildpack-wordpress","url":"https://github.com/m/heroku-buildpack-wordpress","updatedAt":"2020-12-26T21:01:39Z","id":"MDEwOlJlcG9zaXRvcnkyMDkwMzMzOA=="}]
                 }
            }
        }
    }
}

const repoMock2= {
    request: {
        query: SEARCH_QUERY,
        variables: { InputValue: "ww" }
    },
    result: {
        errors: [new Error('Error!')],
    }
}



describe("Test Snapshot", () =>{

    it("should match snapshot", ()=>{

        let wrapper = shallow(

            <MockedProvider mocks={[repoMock]} addTypename={false}>
            <ResultDisplay inputValue="test" />
        </MockedProvider>
        )

        expect(wrapper).toMatchSnapshot()
    })    

    it("should wait result", async()=>{

        const component = TestRenderer.create(
            <MockedProvider mocks={[repoMock]} addTypename={false}>
              <ResultDisplay inputValue="test" />
            </MockedProvider>,
          );
        
          await renderer.act(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
        });
       
    })

    it("should get result sucessful", async()=>{

        const component = TestRenderer.create(
            <MockedProvider mocks={[repoMock2]} addTypename={false}>
              <ResultDisplay inputValue="ww" />
            </MockedProvider>,
          );
        
          await renderer.act(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
        });

       
    })

    







})



