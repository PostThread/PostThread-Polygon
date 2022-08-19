import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getPostList {
    getPostList {
      body
      category {
        name
      }
      title
      url
      user {
        username
        profile_pic
      }
      created_at
      id
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query getPosts($id: ID!) {
    getPosts(id: $id) {
      body
      categories {
        name
      }
      commentsList {
        body
        created_at
        users {
          username
          profile_pic
        }
      }
      title
      url
      users {
        username
        profile_pic
      }
      id
      transaction_hash
    }
  }
`;

export const GET_CATEGORY_BY_NAME = gql`
  query getCategoryByName($name: String!) {
    getCategoryByName(name: $name) {
      id
      name
      created_at
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      created_at
    }
  }
`;

export const GET_CATEGORIES_LIST_LIMIT = gql`
  query getCategoryListLimit($limit: Int!) {
    getCategoryListLimit(limit: $limit) {
      id
      created_at
      name
    }
  }
`;

export const GET_USER_LIST_LIMIT = gql`
  query getUserListLimit($limit: Int!) {
    getUserListLimit(limit: $limit) {
      id
      profile_pic
      username
    }
  }
`;

export const GET_USER_PROFILE_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      postsList {
        body
        categories {
          name
          id
        }
        id
        title
        url
        created_at
        users {
          profile_pic
          username
        }
        commentsList {
          body
          created_at
          users {
            profile_pic
            username
          }
          id
        }
      }
      profile_pic
      username
      created_at
      level
      reddit_airdrop_claimed
      reddit_airdrop_value
    }
  }
`;

export const GET_COMMENTS_BY_POST_ID = gql`
  query getCommentsUsingPost_id($id: ID!) {
    getCommentsUsingPost_id(id: $id) {
      body
      users {
        profile_pic
        username
      }
      created_at
    }
  }
`;

export const GET_VOTES_BY_POST_ID = gql`
  query getVotesUsingPost_id($id: ID!) {
    getVotesUsingPost_id(id: $id) {
      id
      created_at
      up
      post_id
      user_id
    }
  }
`;

export const GET_FOLLOWINGS_BY_USER_ID = gql`
  query getFollowingsByUser_id($id: ID!) {
    getFollowingsByUser_id(id: $id) {
      following {
        username
        id
      }
    }
  }
`;

export const GET_FOLLOWERS_BY_USER_ID = gql`
  query getFollowersByUser_id($id: ID!) {
    getFollowersByUser_id(id: $id) {
      follower {
        username
        id
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query getPostListByCategory($name: String!, $offset: Int!, $limit: Int!) {
    getPostListByCategory(name: $name, offset: $offset, limit: $limit) {
      body
      title
      url
      users {
        username
        profile_pic
      }
      created_at
      id
      categories {
        name
      }
    }
  }
`;

export const GET_FILTERED_POSTS = gql`
  query getFilteredPosts($limit: Int!, $offset: Int!, $order_by: String!) {
    getFilteredPosts(limit: $limit, offset: $offset, order_by: $order_by) {
      id
      body
      categories {
        name
      }
      title
      url
      users {
        username
        profile_pic
      }
      created_at
      transaction_hash
      reddit_upvotes
      reddit_downvotes
    }
  }
`;

export const GET_LATEST_USERS = gql`
  query getLatestUsers($first: Int!) {
    usersCollection(first: $first, orderBy: { created_at: DescNullsLast }) {
      edges {
        node {
          id
          username
          profile_pic
        }
      }
    }
  }
`;

export const GET_LATEST_CATEGORIES = gql`
  query getLatestCategories($limit: Int!) {
    getLatestCategories(limit: $limit) {
      id
      name
    }
  }
`;

export const SEARCH_USERS_BY_USERNAME = gql`
  query searchUsersByUsername($username: String!) {
    searchUsersByUsername(username: $username) {
      username
      id
      profile_pic
    }
  }
`;

export const GET_PAYOUT_BY_USER_ID = gql`
  query getPayoutByUserId($id: ID!) {
    getPayoutByUserId(id: $id) {
      id
      payout_amount
      user_id
      users {
        username
      }
    }
  }
`;

export const GET_USER_PROFILE_CARD_BY_USER_ID = gql`
  query getUserProfileCardByUser_id($id: ID!) {
    getUsers(id: $id) {
      daily_payout_claimed
      created_at
      level
      username
      profile_pic
      reddit_airdrop_claimed
      reddit_airdrop_value
    }
  }
`;

export const GET_USER_SOCIAL_INFO = gql`
  query getUserSocialInfo($id: ID!) {
    getUsers(id: $id) {
      discord_username
      reddit_username
      github_username
      email
      wallet_address_personal
      reddit_airdrop_value
      reddit_airdrop_claimed
    }
  }
`;

export const GET_AIRDROP_INFO = gql`
  query getVariables {
    getVariables {
      variable_name
      variable_value
    }
}`
