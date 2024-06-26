import Link from "next/link"
import { useRouter } from "next/router";

interface props {
    children: React.ReactElement | (({ active }: { active: boolean }) => React.ReactElement),
    href: string,
    as?: string
}

export default function ActiveLink({ children, ...props }: props) {
    const { asPath } = useRouter();
    const active = asPath === props.href || asPath === props.as;

    return (
        <Link {...props}>
            {
                typeof children == 'function'
                    ? children({ active })
                    : children
            }
        </Link>
    )
}