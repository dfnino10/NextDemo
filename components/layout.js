import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
  <div>
  <Head>
    <title>Currency rates</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
  </Head>
    <Navbar/>
    {props.children}
  </div>
);

export default Layout;