import React, { useState } from 'react';

import {
    Container,
    Content,
    Title,
    Icon,
    Button,
    Inpunt,
} from './styles';

export const Header = () => {

    const [onFocused, setOnFocused] = useState(true);

    return (
        <Container>
            {
                !onFocused ?

                    <Content>
                        <Title>
                            Cidades
                        </Title>
                        <Button onPress={() => setOnFocused(!onFocused)}>
                            <Icon name="search" />
                        </Button>
                    </Content>

                    :

                    <Content>
                        <Button onPress={() => setOnFocused(!onFocused)}>
                            <Icon name="close" />
                        </Button>
                        <Inpunt
                            autoFocus
                        />
                    </Content>

            }
        </Container>
    );
}
