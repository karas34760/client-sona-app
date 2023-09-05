import React from 'react';
import FacebookIcon from 'public/assets/icons/socials/facebook.svg';
import TwitterIcon from 'public/assets/icons/socials/twitter.svg';
import GithubIcon from 'public/assets/icons/socials/github.svg';
import LinkedInIcon from 'public/assets/icons/socials/linkedin.svg';
import WebsiteIcon from 'public/assets/icons/generals/website.svg';
import { Icon, Link as NextLink } from '@chakra-ui/react';
import Link from 'next/link';
const LinkSocials = [
  {
    key: 'twitter',
    link: 'https://twitter.com/Karas_2k',
    icon: TwitterIcon,
  },
  {
    key: 'facebook',
    link: '#',
    icon: FacebookIcon,
  },
  {
    key: 'linkedin',
    link: '#',
    icon: LinkedInIcon,
  },
  {
    key: 'github',
    link: 'https://github.com/Kafierence',
    icon: GithubIcon,
  },
  {
    key: 'website',
    link: '#',
    icon: WebsiteIcon,
  },
];
const SocialLink = () => {
  return (
    <>
      {LinkSocials.map(item => (
        <NextLink key={`foo-${item.key}`} as={Link} href={item.link || '#'}>
          <Icon
            as={item.icon}
            width={6}
            height={6}
            transition="ease-in-out 0.3s"
            color="primary.gray.400"
            _hover={{
              color: 'white',
            }}
          />
        </NextLink>
      ))}
    </>
  );
};

export default SocialLink;
