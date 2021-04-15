import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";

import gql from "graphql-tag";

const ResultDisplay = props => {


    
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

  
  const { loading, data, error } = useQuery(SEARCH_QUERY, {
    variables: { InputValue: props.inputValue }
  });



  if (loading) {
    return <LoadingDisplay />;
  }

  if (error) {
    return <ErrorDisplay />;
  }

  if (data && data.user.repositories) {
    let renderArray = JSON.parse(JSON.stringify(data.user.repositories.nodes));
    let totalCount = data.user.repositories.totalCount

    console.log(JSON.stringify(renderArray))

    

    renderArray= renderArray.map(item =>{

        let itemLanguage = item.languages.nodes;
        let itemLanguageDisplay = ""

        for(let i=0; i< itemLanguage.length; i++){
            if(i===0){

                itemLanguageDisplay +=`${itemLanguage[i].name}`


            }else{

                itemLanguageDisplay +=`, ${itemLanguage[i].name}`

            }

      
        }

        return {

            ...item, 
            languages: itemLanguageDisplay

        }


    })

    

    return (
        totalCount?

            <table className="search-result-table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Language</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
    
              {renderArray.map((item, index) => {
    
                return(
                <tr key={item.id}>
                    <td scope="row">{index+1}</td>
                  <td scope="row">{item.name}</td>
                  <td scope="row">{item.description}</td>
                  <td scope="row">{item.languages}</td>
    
                  <td scope="row">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  </td>
                </tr>
    
                )
              })}
    
            </tbody>
          </table>
          :
          <div className="no-result-text">No result</div>

        

    );
  }

 
};

ResultDisplay.propTypes = {};

export default ResultDisplay;
