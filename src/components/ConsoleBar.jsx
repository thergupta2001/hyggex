import PropTypes from 'prop-types';

export const ConsoleBar = () => {
    return (
        <div className="flex justify-center items-center">
            <ConsoleBarLink href="/">Study</ConsoleBarLink>
            <ConsoleBarLink href="/">Quiz</ConsoleBarLink>
            <ConsoleBarLink href="/">Test</ConsoleBarLink>
            <ConsoleBarLink href="/">Game</ConsoleBarLink>
            <ConsoleBarLink href="/">Others</ConsoleBarLink>
        </div>
    )
}

const ConsoleBarLink = ({ href, children }) => {
    return (
        <a href={href} className="text-slate-700 text-xl font-inter mx-1 md:mx-4 font-medium md:px-4 md:py-2 md:border-b-2 md:border-transparent md:hover:border-slate-700">
            {children}
        </a>
    );
};

ConsoleBarLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
