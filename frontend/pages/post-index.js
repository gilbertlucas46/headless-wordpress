import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper.js';
import Layout from '../components/Layout.js';
import PostIndex from '../components/PostIndex';
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';


class PostIndexPage extends Component {
  render() {
    return (
      <Layout index={false} {...this.props}>
        <h1>Post Index</h1>
        <PostIndex limit={20} />
      </Layout>
    );
  }
}

export default PageWrapper(PostIndexPage);
