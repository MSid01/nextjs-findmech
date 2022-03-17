import { gql } from "@apollo/client"

const SIGN_IN= gql `mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
        confirmed
      }
    }
  }
`

const SIGN_UP= gql `
mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        username
        confirmed
      }
    }
  }
`

const GET_GARAGE_INITIAL_DATA_BY_ID = gql `
query Garage($garageId: ID) {
  garage(id: $garageId) {
    data {
      attributes {
        garage_name
        garage_phn_num
        garage_rating
        towing_available
        address {
          id
          city
          street
          state
          district
          postal_code
          landmark
        }
        timetable {
          id
          start
          end
        }
        garage_image {
          data {
            attributes {
              url
              formats
            }
          }
        }
        owner_first_name
        owner_last_name
        number_of_visitors
        products {
          id
          product_name
          product_price
          product_image {
            data {
              id
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
}
`

const GET_STORE_PRODUCTS= gql `
query Garages {
  garages {
    data {
      id
      attributes {
        products {
          id
          product_name
          product_image {
            data {
              id
              attributes {
                formats 
              }
            }
          }
          product_price
        }
      }
    }
  }
}
`

export {SIGN_IN, SIGN_UP, GET_GARAGE_INITIAL_DATA_BY_ID, GET_STORE_PRODUCTS};