import React, { useState } from 'react';

import {
    Container,
    Content,
    Title,
    Icon,
    Button,
    Input,
} from './styles';

export const Header = () => {

    const [onFocused, setOnFocused] = useState(false);

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
                        <Input
                            placeholder="Busque por uma cidade"
                            autoFocus
                        />
                    </Content>

            }
        </Container>
    );
}
