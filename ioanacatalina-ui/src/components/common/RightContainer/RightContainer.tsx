import { Flex } from 'UI/Flex/Flex';
import { Typography } from 'UI/Typography/Typography';

interface RightContainerProps {
    title: string;
    children?: React.ReactNode;
}

export default function RightContainer({ title, children }: RightContainerProps) {
    return (
        <Flex column align={(a) => a.center} fullWidth paddingOffset={{ all: 1 }}>
            <Typography.H2 alignCenter marginOffset={{ bottom: 2 }}>
                {title}
            </Typography.H2>

            {children}
        </Flex>
    );
}
