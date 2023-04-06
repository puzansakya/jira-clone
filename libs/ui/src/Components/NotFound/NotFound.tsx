import { Flex } from '@chakra-ui/react';
import notFoundLink from './images/404.png';
import './not-found.module.scss';
/* eslint-disable-next-line */
export interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  return (
    <Flex minH="100vh" alignItems="center">
      <div className="pic-404">
        <img className="pic-404__parent" src={notFoundLink} alt="404" />
      </div>
      <div className="bullshit">
        <div className="bullshit__oops">OOPS!</div>
        <div className="bullshit__info">
          All rights reserved
          <a
            style={{ color: '#20a0ff' }}
            href="https://wallstreetcn.com"
            target="_blank"
            rel="noreferrer"
          >
            wallstreetcn
          </a>
        </div>
        <div className="bullshit__headline">Test</div>
        <div className="bullshit__info">
          Please check that the URL you entered is correct, or click the button
          below to return to the homepage.
        </div>
        <p className="bullshit_return-home">Back to home</p>
      </div>
    </Flex>
  );
}

export default NotFound;
