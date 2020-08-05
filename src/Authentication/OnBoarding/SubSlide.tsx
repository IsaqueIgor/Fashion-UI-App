import React from 'react';
import {
    View,
    StyleSheet,

} from 'react-native';

import { Button, Text } from '../../components';

interface SubSlideProps {
    subtitle: string;
    description: string;
    last: boolean;
    onPress: () => void;
};

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
    return (
        <>
            <View style={styles.container}>
                <Text variant='title2' style={styles.subTitle}>
                    {subtitle}
                </Text>
                <Text variant='body' style={styles.description}>
                    {description}
                </Text>
                <Button
                    label={last ? "Let's get started!" : "Next"}
                    variant={last ? "primary" : "default"}
                    {...{ onPress }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 44,
    },
    subTitle: {
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        marginBottom: 40,
    },
});

export default SubSlide;