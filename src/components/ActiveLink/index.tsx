import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';
interface ActiveLinkProps extends LinkProps {
  icon?: React.ComponentType<IconBaseProps>;
}

export function ActiveLink({ icon: Icon, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? 'active' : '';

  return (
    <Link {...rest}>
      <Container activeClassName={className}>
        <Icon
          size={20}
          color={className === 'active' ? '#ffffff' : '#C4C4C4'}
        />
      </Container>
    </Link>
  );
}
