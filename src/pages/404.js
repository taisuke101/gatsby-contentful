import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';


const Error = () => {
    return (
        <Layout>
            <ErrorPage>
                <h1>お探しのページは見つかりませんでした</h1>
                <Link to={`/`}>Homeに戻る</Link>
            </ErrorPage>
        </Layout>
    )
}

export const ErrorPage = styled.div`
    padding: 20vh 0;
    text-align: center;
`

export default Error
