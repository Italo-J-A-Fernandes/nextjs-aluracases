import NextLink from 'next/link';
import LinkEstilizado from '../LinkEstilizado';

const Link = ({children, href, ...props}) => {
    return (
        <NextLink href={href} passHref>
            <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    )
}

export default Link;