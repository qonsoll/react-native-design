import { StyleSheet } from 'react-native';

const useLineHeight = (value) => {
    const style = StyleSheet.create({
        main: {
            textAlign: value,
        },
    });
    return style.main;
};

export default useLineHeight;
